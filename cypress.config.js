// cypress.config.js
// Este arquivo é responsável por configurar o Cypress.

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Configurações específicas para os testes end-to-end (e2e)
  e2e: {
    // URL base da aplicação a ser testada. Todos os cy.visit('/') usarão esta URL.
    baseUrl: 'http://127.0.0.1:4000',
    // Reporter utilizado para gerar relatórios de testes. O 'cypress-mochawesome-reporter'
    // gera relatórios HTML detalhados das execuções dos testes.
    reporter: 'cypress-mochawesome-reporter',
    // Opção comentada para geração de vídeo. Se descomentada, gera um vídeo da execução
    // dos testes, substituindo o vídeo anterior a cada nova execução.
    // video: true,  este comando gera/substitui a evidencia de vide a cada execução de testes

    // Função para configurar eventos de Node.js que o Cypress pode usar.
    // Aqui, ele é usado para integrar o plugin do Mochawesome Reporter.
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Requer o plugin do Mochawesome Reporter para processar os resultados dos testes.
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
