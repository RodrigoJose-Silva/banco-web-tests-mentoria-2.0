// cypress/support/e2e.js
// Este arquivo é executado automaticamente antes de cada arquivo de teste.
// É um ótimo lugar para colocar configurações globais e comportamentos que modificam o Cypress.

// Importa comandos personalizados definidos em './commands'.
// Este arquivo centraliza a importação de todos os comandos customizados do projeto.
import './commands'

// Importa o registro do Cypress Mochawesome Reporter.
// Isso integra o reporter para que ele possa gerar relatórios detalhados após a execução dos testes.
import 'cypress-mochawesome-reporter/register'