describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Login com dados validos devem permitir entrada no sistema', () => {
    cy.fazerLoginComCredenciaisValidas()
    //cy.screenshot('apos-clicar-entrar')  função para tirar screenshot após determinada ação, pode usar em qlq lugar do cenário de teste

    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  it('Não deve permitir efetuar login com senha incorreta exibindo mensagem de erro', () => {
    cy.fazerLoginComCredenciaisInvalida()

    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})