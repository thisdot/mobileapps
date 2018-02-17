/* eslint max-len: "off" */

'use strict';

const newsHtml1 = '<!--June 20 --> In <a rel="mw:WikiLink" href="./Basketball" title="Basketball" id="mwBA">basketball</a>, the <a rel="mw:WikiLink" href="./Cleveland_Cavaliers" title="Cleveland Cavaliers" id="mwBQ">Cleveland Cavaliers</a> defeat the <a rel="mw:WikiLink" href="./Golden_State_Warriors" title="Golden State Warriors" id="mwBg">Golden State Warriors</a> to win the <b id="mwBw"><a rel="mw:WikiLink" href="./2016_NBA_Finals" title="2016 NBA Finals" id="mwCA">NBA Finals</a></b> <i id="mwCQ">(<a rel="mw:WikiLink" href="./Bill_Russell_NBA_Finals_Most_Valuable_Player_Award" title="Bill Russell NBA Finals Most Valuable Player Award" id="mwCg">MVP</a> <a rel="mw:WikiLink" href="./LeBron_James" title="LeBron James" id="mwCw">LeBron James</a> pictured)</i>.';
const newsHtml2 = '<!--June 24 --> After the United Kingdom <b id="mwCA"><a rel="mw:WikiLink" href="./United_Kingdom_European_Union_membership_referendum,_2016" title="United Kingdom European Union membership referendum, 2016" id="mwCQ" class="feednewslink">votes to leave</a></b> the <a rel="mw:WikiLink" href="./European_Union" title="European Union" id="mwCg" class="feednewslink">European Union</a>, <a rel="mw:WikiLink" href="./British_Prime_Minister" title="British Prime Minister" id="mwCw" class="feednewslink">British Prime Minister</a> <b id="mwDA"><a rel="mw:WikiLink" href="./David_Cameron" title="David Cameron" id="mwDQ" class="feednewslink">David Cameron</a></b> <i id="mwDg">(pictured)</i> announces he will resign by October.';

const cleanNewsHtml1 = '<!--June 20 --> In <a rel="mw:WikiLink" href="./Basketball" title="Basketball" id="mwBA">basketball</a>, the <a rel="mw:WikiLink" href="./Cleveland_Cavaliers" title="Cleveland Cavaliers" id="mwBQ">Cleveland Cavaliers</a> defeat the <a rel="mw:WikiLink" href="./Golden_State_Warriors" title="Golden State Warriors" id="mwBg">Golden State Warriors</a> to win the <b id="mwBw"><a rel="mw:WikiLink" href="./2016_NBA_Finals" title="2016 NBA Finals" id="mwCA">NBA Finals</a></b>.';
const cleanNewsHtml2 = '<!--June 24 --> After the United Kingdom <b id="mwCA"><a rel="mw:WikiLink" href="./United_Kingdom_European_Union_membership_referendum,_2016" title="United Kingdom European Union membership referendum, 2016" id="mwCQ" class="feednewslink">votes to leave</a></b> the <a rel="mw:WikiLink" href="./European_Union" title="European Union" id="mwCg" class="feednewslink">European Union</a>, <a rel="mw:WikiLink" href="./British_Prime_Minister" title="British Prime Minister" id="mwCw" class="feednewslink">British Prime Minister</a> <b id="mwDA"><a rel="mw:WikiLink" href="./David_Cameron" title="David Cameron" id="mwDQ" class="feednewslink">David Cameron</a></b> announces he will resign by October.';

const newsHtml3 = '<li id="mwCA"><!--July 22--> In <a rel="mw:WikiLink" href="./Sport_of_athletics" title="Sport of athletics" id="mwCQ">athletics</a>, American sprinter <a rel="mw:WikiLink" href="./Kendra_Harrison" title="Kendra Harrison" id="mwCg">Kendra Harrison</a> breaks the <a rel="mw:WikiLink" href="./Women\'s_100_metres_hurdles_world_record_progression" title="Women\'s 100 metres hurdles world record progression" id="mwCw">28-year-old</a> <a rel="mw:WikiLink" href="./100_metres_hurdles" title="100 metres hurdles" id="mwDA">100 metres hurdles</a> <b id="mwDQ"><a rel="mw:WikiLink" href="./100_metres_hurdles#Top_25_fastest_athletes" title="100 metres hurdles" id="mwDg">world record</a></b> at the <a rel="mw:WikiLink" href="./London_Grand_Prix" title="London Grand Prix" id="mwDw">London Grand Prix</a>.</li>';
const newsHtml4 = '<!--July 22--> In <a rel="mw:WikiLink" href="./Sport_of_athletics" title="Sport of athletics" id="mwCQ">athletics</a>, American sprinter <a rel="mw:WikiLink" href="./Kendra_Harrison" title="Kendra Harrison" id="mwCg">Kendra Harrison</a> breaks the <a rel="mw:WikiLink" href="./Women\'s_100_metres_hurdles_world_record_progression" title="Women\'s 100 metres hurdles world record progression" id="mwCw">28-year-old</a> <a rel="mw:WikiLink" href="./100_metres_hurdles" title="100 metres hurdles" id="mwDA">100 metres hurdles</a> <b id="mwDQ"><a rel="mw:WikiLink" href="./100_metres_hurdles#Top_25_fastest_athletes" title="100 metres hurdles" id="mwDg">world record</a></b> at the <a rel="mw:WikiLink" href="./London_Grand_Prix" title="London Grand Prix" id="mwDw">London Grand Prix</a>.';

module.exports = {
    newsHtml1,
    newsHtml2,
    cleanNewsHtml1,
    cleanNewsHtml2,
    newsHtml3,
    newsHtml4
};