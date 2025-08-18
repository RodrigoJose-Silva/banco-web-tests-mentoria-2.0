// cypress/e2e/login.cy.js
// Este arquivo contém os cenários de teste end-to-end para a funcionalidade de login.

describe('Login', () => {
  // O bloco beforeEach é executado antes de cada teste (it) neste suite.
  // Ele garante que a página de login esteja sempre carregada antes de iniciar um novo teste.
  beforeEach(() => {
    // Visita a URL base configurada no cypress.config.js
    cy.visit('/')
  })

  // Cenário de teste: Login com dados válidos.
  it('Login com dados validos devem permitir entrada no sistema', () => {
    // Chama o comando customizado para preencher e submeter o formulário de login com credenciais válidas.
    cy.fazerLoginComCredenciaisValidas()
    // cy.screenshot('apos-clicar-entrar') // Função comentada para tirar screenshot após determinada ação.
    // Pode ser usada em qualquer lugar do cenário de teste para depuração ou evidência.

    // Verifica se o título 'Realizar Transferência' está visível na página,
    // confirmando que o login foi bem-sucedido e o usuário foi redirecionado.
    cy.contains('h4', 'Realizar Transferência')
      .should('be.visible')
  })

  // Cenário de teste: Não deve permitir login com senha incorreta.
  it('Não deve permitir efetuar login com senha incorreta exibindo mensagem de erro', () => {
    // Chama o comando customizado para preencher e submeter o formulário de login com credenciais inválidas.
    cy.fazerLoginComCredenciaisInvalida()

    // Verifica se a mensagem de erro específica para login incorreto é exibida no toast.
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})