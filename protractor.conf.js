module.exports.config = {
    specs: ['spec.js'],
    directConnect: true,
    baseUrl: 'https://www.pgatour.com/',

    onPrepare:() => {
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        jasmine.getEnv().addReporter(new Jasmine2Reporter());

        browser.waitForAngularEnabled(false);

        beforeEach( () => {
        //Here will be preconditions, like a launching browser before each test case starts
            browser.get('')        
        })

        afterEach( () => {
            browser.get('/')
            browser.executeScript('window.sessionStorage.clear();')
            browser.executeScript('window.localStorage.clear();')
            browser.manage().deleteAllCookies()
        })

        global.EC = protractor.ExpectedConditions;
    },    
}