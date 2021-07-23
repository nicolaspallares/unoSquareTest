const NasaHomePage = require('../pageObjects/nasaHomePage');
const Util = require('../utils/util');
const globals = require('../utils/globals');
const TestData = require('../testData/nasaPage.json')
var fs = require('fs');
var assert = require('assert');

beforeEach(() => {
    browser.setWindowSize(1440, 968);
});

afterEach(() => {
    CLEAN_UP();
});

describe('Validate APIs on NASA webpage', () => {
    it('Should validate GET responses from APOD, Asteroids NeoWs and DONKI', () => {
        // I've already have a key, uncoment this lines if you want to get a new one (maybe use differente credentials because i've reached the limit on Nasa's page)
        //const APIKey = NasaHomePage.goToNasaAndGetKey();
        NasaHomePage.selectAPIandGo(1);
        var API1 = NasaHomePage.exapmleQuery1.getText();
        const APIUrl1 = NasaHomePage.treatLink(API1, TestData.APIKey);
        browser.pause(globals.longWait);
        var output1 = browser.mock('**/' + 'apod?api_key=' + TestData.APIKey, { method: 'get' });

        browser.url(APIUrl1);
        browser.pause(globals.shortWait);

        assert.strictEqual(output1.calls[0].initialPriority, TestData.responsePriority);
        assert.strictEqual(output1.calls[0].referrerPolicy, TestData.responseRefeerPolicy);
        assert.strictEqual(output1.calls[0].statusCode, parseInt(TestData.responseStatusCode, 10));
        assert.strictEqual(output1.calls[0].responseHeaders.Vary, TestData.responseVary);
        assert.strictEqual(output1.calls[0].responseHeaders.Via, TestData.responseVia);
        assert.strictEqual(output1.calls[0].body.copyright, TestData.bodyCopyRight);
        assert.strictEqual(output1.calls[0].body.media_type, TestData.boddyMediaType);
        assert.strictEqual(output1.calls[0].body.service_version, TestData.bodyServiceVersion);

        NasaHomePage.selectAPIandGo(2);
        var API2 = NasaHomePage.exampleQuery2.getText();
        const APIUrl2 = NasaHomePage.treatLink(API2, TestData.APIKey);
        browser.pause(globals.longWait);

        var output2 = browser.mock('**', { method: 'get' });
        browser.url(APIUrl2);
        browser.pause(globals.shortWait);

        assert.strictEqual(output2.calls[0].initialPriority, TestData.responsePriority);
        assert.strictEqual(output2.calls[0].referrerPolicy, TestData.responseRefeerPolicy);
        assert.strictEqual(output2.calls[0].statusCode, parseInt(TestData.responseStatusCode, 10));
        assert.strictEqual(output2.calls[0].responseHeaders.Vary, TestData.responseVary);
        assert.strictEqual(output2.calls[0].responseHeaders.Via, TestData.responseVia2);
        assert.strictEqual(output2.calls[0].body.links.next, TestData.bodyLinkNext);
        assert.strictEqual(output2.calls[0].body.links.prev, TestData.bodyLinkPrev);
        assert.strictEqual(output2.calls[0].body.links.self, TestData.bodyLinkSelf);


        NasaHomePage.selectAPIandGo(3);
        var API3 = NasaHomePage.exampleQuery3.getText();
        const APIUrl3 = NasaHomePage.treatLink(API3, TestData.APIKey);
        browser.pause(globals.longWait);

        var output3 = browser.mock('**', { method: 'get' });
        browser.url(APIUrl3);
        browser.pause(globals.shortWait);

        assert.strictEqual(output3.calls[0].initialPriority, TestData.responsePriority);
        assert.strictEqual(output3.calls[0].referrerPolicy, TestData.responseRefeerPolicy);
        assert.strictEqual(output3.calls[0].statusCode, parseInt(TestData.responseStatusCode, 10));
        assert.strictEqual(output3.calls[0].responseHeaders.Vary, TestData.responseVary);
        assert.strictEqual(output3.calls[0].body[0].time21_5, TestData.bodyTime);
        assert.strictEqual(output3.calls[0].body[0].catalog, TestData.bodyCatalog);
        assert.strictEqual(output3.calls[0].body[0].link, TestData.bodyLink);

    });
});