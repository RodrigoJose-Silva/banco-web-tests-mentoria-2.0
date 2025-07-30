const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //  video: true,  este comando gera/substitui a evidencia de vide a cada execução de testes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
