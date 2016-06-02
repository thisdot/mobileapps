'use strict';


var preq   = require('preq');
var assert = require('../../utils/assert');
var server = require('../../utils/server');
var headers = require('../../utils/headers');
var tUtil = require('../../utils/testUtils');

var date = new Date();
date.setDate(date.getDate() - 5);
var dateString = date.getFullYear() + '/' + tUtil.pad(date.getMonth()) + '/' + tUtil.pad(date.getDate());

describe('aggregated feed endpoint', function() {
    this.timeout(20000);

    before(function () { return server.start(); });

    it('should respond to GET request with expected headers, incl. CORS and CSP headers', function() {
        return headers.checkHeaders(server.config.uri + 'en.wikipedia.org/v1/feed/featured/' + dateString,
            'application/json');
    });

    it('Response should contain all expected properties', function() {
        return preq.get({ uri: server.config.uri + 'en.wikipedia.org/v1/feed/featured/' + dateString })
            .then(function(res) {
                var body = res.body;
                assert.deepEqual(res.status, 200);
                assert.ok(body.hasOwnProperty('tfa'), 'Should have today\'s featured article');
                assert.ok(body.hasOwnProperty('mostread'), 'Should have most-read articles');
                assert.ok(body.hasOwnProperty('random'), 'Should have random article');
                assert.ok(body.hasOwnProperty('news'), 'Should have today\'s news');
                assert.ok(body.hasOwnProperty('image'), 'Should have today\'s featured image');
                assert.ok(body.hasOwnProperty('video'), 'Should have today\'s featured video');
            });
    });
});