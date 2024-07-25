const { defineConfig } = require('cypress');


module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'HTML Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },

  e2e: {
    baseUrl: 'https://www.check24.de/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('after:screenshot', (details) => {
        console.log(details); // Print screenshot details to the console
      });
    }
  },
});
