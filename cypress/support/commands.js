// cypress/support/commands.js
// Este arquivo é o ponto central para importação de comandos customizados do Cypress.
// Ele agrega comandos de diferentes módulos, tornando-os disponíveis globalmente para todos os testes.

// Importa comandos de uso geral, que podem ser aplicados em diversas partes da aplicação.
import './commands/common'

// Importa comandos específicos para a funcionalidade de login.
import './commands/login'
// Importa comandos específicos para a funcionalidade de transferência.
import './commands/transferencia'