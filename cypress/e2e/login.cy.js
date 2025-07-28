describe('Login', () => {
  it('Login com dados validos devem permitir entrada no sistema', () => {
    cy.visit('http://127.0.0.1:4000')
    cy.get('#username')
      .click()
      .type('julio.lima')
    cy.get('#senha')
      .click()
      .type('123456')
    cy.get('#login-section > .btn')
      .click()

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })
})