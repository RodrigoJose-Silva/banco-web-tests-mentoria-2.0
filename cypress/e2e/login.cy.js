describe('Login', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('URL'))
  })
  it('Login com dados validos devem permitir entrada no sistema', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username')
        .click()
        .type(credenciais.valida.usuario)
      cy.get('#senha')
        .click()
        .type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar')
      .click()
    //cy.screenshot('apos-clicar-entrar')  função para tirar screenshot após determinada ação, pode usar em qlq lugar do cenário de teste

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('Não deve permitir efetuar login com senha incorreta exibindo mensagem de erro', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username')
        .click()
        .type(credenciais.invalida.usuario)
      cy.get('#senha')
        .click()
        .type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar')
      .click()

    cy.get('.toast')
      .should('have.text', 'Erro no login. Tente novamente.')
  })
})