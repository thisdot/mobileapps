#!/usr/bin/env node

'use strict';

/*
  Notes:
  * Start one local MCS instance for the "new" version before running this script.
  * Optionally, start another local MCS instance for the "old" version before
  * running this script. See OLD_PORT below.
  * Run the script from the script folder.

  Arguments: provide a single argument which is the language code for
  the Wikipedia project.

  Example:
  $ npm start
  In another terminal run:
  $ cd scripts
  $ ./compare-extracts.js en

  The output will be in the private/extracts folder.
*/

const BBPromise = require('bluebird');
const fs = require('fs');
const mkdir = require('mkdirp');
const preq = require('preq');

const DELAY = 10; // delay between requests in ms
const NEW_PORT = 6927;
const OLD_PORT = 6928; // set to undefined to go against production
const topPagesDir = '../private/top-pages';
const outDir = '../private/extracts';

let lang;
let topPages;
const html = { name: 'html' };
const plain = { name: 'plain' };
const other = { name: 'other' };

const uriForWikiLink = (title, revTid, lang) => {
    return `https://${lang}.m.wikipedia.org/wiki/${title}?oldid=${revTid.split('/')[0]}`;
};

const uriForProdSummary = (title, lang) => {
    return `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
};

const uriForLocalSummary = (title, lang, revTid, port = NEW_PORT) => {
    const suffix = revTid ? `/${revTid}` : '';
    return `http://localhost:${port}/${lang}.wikipedia.org/v1/page/summary/${encodeURIComponent(title)}${suffix}`;
};

const outputStart = (file) => {
    /* eslint-disable max-len */
    file.write(`<html>\n`);
    file.write(`<head>\n`);
    file.write(`<meta charset="UTF-8"/>\n`);
    file.write(`<link rel="StyleSheet" href="../static/compare-table.css" />\n`);
    file.write(`</head>\n`);
    file.write(`<body>\n`);
    file.write(`<script type="text/javascript" src="../static/compare-table.js" charset="utf-8"></script>\n`);
    file.write(`<h2>Extract comparison for top pages in ${lang}.wikipedia.org</h2>\n`);
    file.write(`<a href="../html/${lang}.html">extract_html</a> |\n`);
    file.write(`<a href="../plain/${lang}.html">extract</a> |\n`);
    file.write(`<a href="../other/${lang}.html">other properties</a> |\n`);
    file.write(`<form>\n`);
    file.write(`<input type="checkbox" id="showSameCB" onchange="toggleShow();">\n`);
    file.write(`<label for="showSameCB">Show same</label>\n`);
    file.write(`</form>\n`);
    file.write(`<table>\n`);
    file.write(`<tr>\n`);
    file.write(`<th class="titleColumn">Title</th>\n`);
    file.write(`<th class="valueColumn">Old (:${OLD_PORT})</th>\n`);
    file.write(`<th class="valueColumn">New (:${NEW_PORT})</th>\n`);
    file.write(`</tr>\n`);
    /* eslint-enable max-len */
};

const outputEnd = (file) => {
    file.write(`</table>\n`);
    file.write(`</body>\n`);
    file.write(`</html>\n`);
    file.end();
};

const outputEndTxtFiles = () => {
    html.oldFile.end();
    html.newFile.end();
    plain.oldFile.end();
    plain.newFile.end();
    other.oldFile.end();
    other.newFile.end();
};

const compareExtractsHTML = (file, oldExtractValue, newExtractValue,
    counter, title, revTid, lang) => {

    const displayTitle = title.replace(/_/g, ' ');
    const wikiLink = uriForWikiLink(title, revTid, lang);
    const same = (oldExtractValue === newExtractValue) ? ' class="same"' : '';
    const positionLink = `<a id="${counter}" href="#${counter}">${counter}</a>`;
    file.write(`<tr${same}><td class="titleColumn">${positionLink}\n`);
    file.write(`<a href="${wikiLink}">${displayTitle}</a>\n`);
    file.write(`[<a href="${uriForLocalSummary(title, lang, revTid)}">summary</a>]\n`);
    file.write(`</td>\n`);
    file.write(`<td class="valueColumn" dir="auto">${oldExtractValue}</td>\n`);
    file.write(`<td class="valueColumn" dir="auto">${newExtractValue}</td>\n`);
    file.write(`</tr>\n`);
};

/**
 * Make the src and srcset values https URLs instead of protocol-relative URLs.
 * Only needed if the HTML files are viewed locally (=base URL protocol is file) and you care
 * about seeing the images.
 */
const fixImgSources = (value) => {
    return value && value
        .replace(/<img src="\/\//g, '<img src="https://')
        .replace(/srcset="\/\//g, 'srcset="https://')
        .replace(/ 2x, \/\//g, ' 2x, https://');
};

const getExtract = (response) => {
    if (response.status !== 200) {
        return `!! STATUS = ${response.status} !!\n`;
    }
    fixImgSources(response.body.extract_html);
    return response.body;
};

const writeFile = (file, title, revTid, value) => {
    file.write(`== ${title}/${revTid}\n`);
    file.write(`${value}\n`);
};

const OTHER_PROPS = [ 'title', 'displaytitle', 'pageid', 'thumbnail', 'originalimage',
    'lang', 'dir', 'timestamp', 'coordinates' ];

const buildOtherPropString = (input) => {
    const result = {};
    OTHER_PROPS.forEach((key) => {
        result[key] = input[key];
    });
    return JSON.stringify(result, null, 2);
};

const compareExtractsSingleType = (type, oldExtractString, newExtractString,
    counter, title, revTid, lang) => {

    compareExtractsHTML(type.overviewFile, oldExtractString, newExtractString,
        counter, title, revTid, lang);
    writeFile(type.oldFile, title, revTid, oldExtractString);
    writeFile(type.newFile, title, revTid, newExtractString);
};

const compareExtracts = (oldExtract, newExtract, counter, title, revTid, lang) => {
    compareExtractsSingleType(html, oldExtract.extract_html, newExtract.extract_html,
        counter, title, revTid, lang);
    compareExtractsSingleType(plain, oldExtract.extract, newExtract.extract,
        counter, title, revTid, lang);
    compareExtractsSingleType(other, buildOtherPropString(oldExtract),
        buildOtherPropString(newExtract), counter, title, revTid, lang);
};

const fetchExtract = (uri) => {
    return preq.get({ uri })
    .then((response) => {
        return BBPromise.delay(DELAY, getExtract(response));
    }).catch((err) => {
        return BBPromise.resolve(`!!! ${err} "${uri}" !!!`);
    });
};

const fetchAndVerify = (title, revTid, counter, lang) => {
    process.stdout.write('.');
    let newExtract;
    return fetchExtract(uriForLocalSummary(title, lang, revTid))
    .then((response) => {
        newExtract = response;
        if (OLD_PORT) {
            return fetchExtract(uriForLocalSummary(title, lang, revTid, OLD_PORT));
        } else {
            return fetchExtract(uriForProdSummary(title, lang));
        }
    }).then((oldExtract) => {
        compareExtracts(oldExtract, newExtract, counter, title, revTid, lang);
    });
};

const processOneLanguage = (lang) => {
    let counter = 0;
    outputStart(html.overviewFile);
    outputStart(plain.overviewFile);
    outputStart(other.overviewFile);
    BBPromise.each(topPages, (page) => {
        return fetchAndVerify(page.title, page.rev, ++counter, lang);
    })
    .then(() => {
        outputEnd(html.overviewFile);
        outputEnd(plain.overviewFile);
        outputEnd(other.overviewFile);
        outputEndTxtFiles();
    });
};

const setupFiles = (type) => {
    type.dir = `${outDir}/${type.name}`;
    mkdir.sync(type.dir);
    type.oldFileName = `${type.dir}/${lang}.v1.txt`;
    type.newFileName = `${type.dir}/${lang}.v2.txt`;
    type.overviewFileName = `${type.dir}/${lang}.html`;

    type.oldFile = fs.createWriteStream(type.oldFileName, { flags: 'w' });
    type.newFile = fs.createWriteStream(type.newFileName, { flags: 'w' });
    type.overviewFile = fs.createWriteStream(type.overviewFileName, { flags: 'w' });
};

// MAIN
const arg = process.argv[2];
if (arg) {
    lang = arg;
    topPages = require(`${topPagesDir}/top-pages.${lang}.json`).items;
    setupFiles(html);
    setupFiles(plain);
    setupFiles(other);
    processOneLanguage(arg);
} else {
    process.stderr.write(`Error: supply one language parameter (e.g. en)!\n`);
    process.exit(-1);
}
