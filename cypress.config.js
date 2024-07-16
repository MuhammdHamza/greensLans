const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 250000,
    baseUrl: "https://greenplusonline.onlinestar.com.my/login",
    chromeWebSecurity: false,
  
  },
});