module.exports.config = {
    specs: ['specs/*.js'],
    directConnect: true,
    baseUrl: 'https://www.pgatour.com/',

    onPrepare: () => {
        let Jasmine2Reporter = require('jasmine2-reporter').Jasmine2Reporter
        let request = require('request');

        jasmine.getEnv().addReporter(new Jasmine2Reporter());

        browser.waitForAngularEnabled(false);

        global.EC = protractor.ExpectedConditions;

        return new Promise(function (resolve) {
            request('https://www.pgatour.com/etc/tags/PGATOUR/Players/00/87/93.json', (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    global.importedPlayerTag = JSON.parse(body);

                    resolve(global.importedPlayerTag);
                }
            })
        });

        // beforeAll(() => {
        // });

        // beforeEach(() => {
        // //Here will be preconditions, like a launching browser before each test case starts
        //     browser.get('');
        // })

        afterEach(() => {
            // browser.get('/');
            browser.executeScript('window.sessionStorage.clear();');
            browser.executeScript('window.localStorage.clear();');
            browser.manage().deleteAllCookies();
        });
    }

<<<<<<< HEAD
};
=======
};
>>>>>>> 05592d081f4b536a6ae05c2b771c9a81d2d6f15b
