// cypress/support/commands/login.js
// Este arquivo contém comandos Cypress customizados relacionados à funcionalidade de login.
// Eles automatizam os passos de preenchimento de credenciais e clique no botão de entrar.

// Comando customizado para realizar login com credenciais válidas.
// As credenciais são obtidas do arquivo 'credenciais.json'.
// Uso: cy.fazerLoginComCredenciaisValidas()
Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
    // Carrega as credenciais válidas do arquivo fixtures/credenciais.json
    cy.fixture('credenciais').then(credenciais => {
        // Preenche o campo de usuário com a credencial válida
        cy.get('#username')
            .click()
            .type(credenciais.valida.usuario)
        // Preenche o campo de senha com a credencial válida
        cy.get('#senha')
            .click()
            .type(credenciais.valida.senha)
    })
    // Clica no botão 'Entrar' para efetuar o login
    cy.contains('button', 'Entrar')
        .click()
})

// Comando customizado para tentar realizar login com credenciais inválidas.
// As credenciais inválidas são obtidas do arquivo 'credenciais.json'.
// Uso: cy.fazerLoginComCredenciaisInvalida()
Cypress.Commands.add('fazerLoginComCredenciaisInvalida', () => {
    // Carrega as credenciais inválidas do arquivo fixtures/credenciais.json
    cy.fixture('credenciais').then(credenciais => {
        // Preenche o campo de usuário com a credencial inválida
        cy.get('#username')
            .click()
            .type(credenciais.invalida.usuario)
        // Preenche o campo de senha com a credencial inválida
        cy.get('#senha')
            .click()
            .type(credenciais.invalida.senha)
    })
    // Clica no botão 'Entrar' para tentar o login
    cy.contains('button', 'Entrar')
        .click()
})