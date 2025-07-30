describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:4000')
  })
  it('Login com dados validos devem permitir entrada no sistema', () => {
    cy.get('#username')
      .click()
      .type('julio.lima')
    cy.get('#senha')
      .click()
      .type('123456')
    cy.contains('button', 'Entrar')
      .click()
    //cy.screenshot('apos-clicar-entrar')  função para tirar screenshot após determinada ação, pode usar em qlq lugar do cenário de teste

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('Não deve permitir efetuar login com senha incorreta exibindo mensagem de erro', () => {
    cy.get('#username')
      .click()
      .type('julio.lima')
    cy.get('#senha')
      .click()
      .type('012345')
    cy.contains('button', 'Entrar')
      .click()

    cy.get('.toast')
      .should('have.text', 'Erro no login. Tente novamente.')
  })
})