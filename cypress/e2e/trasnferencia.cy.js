// cypress/e2e/trasnferencia.cy.js
// Este arquivo contém os cenários de teste end-to-end para a funcionalidade de transferência.

describe.only('Trasnferências', () => {
    // O bloco beforeEach é executado antes de cada teste (it) neste suite.
    // Ele garante que o usuário esteja logado e na página inicial antes de cada teste de transferência.
    beforeEach(() => {
        // Visita a URL base da aplicação.
        cy.visit('/')
        // Realiza o login com credenciais válidas, usando um comando customizado.
        cy.fazerLoginComCredenciaisValidas()
        // cy.screenshot('apos-clicar-entrar') // Função comentada para tirar screenshot após determinada ação.
        // Pode ser usada em qualquer lugar do cenário de teste para depuração ou evidência.
    })

    // Cenário de teste: Deve permitir transferir quando dados e valores são válidos.
    it('Deve transferir quando informo dados e valores validos', () => {
        // Chama o comando customizado para realizar a transferência com contas e valor válidos.
        cy.realizarTransferencia('Chaves', 'Seu Madruga', '10')

        // Verifica se a mensagem de sucesso de transferência é exibida no toast.
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    // Cenário de teste: Deve apresentar erro ao tentar transferir mais de R$5.000,00 sem token.
    it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {
        // Chama o comando customizado para tentar uma transferência de alto valor sem autenticação adicional.
        cy.realizarTransferencia('Chaves', 'Seu Madruga', '6000')

        // Verifica se a mensagem de erro específica para transferências acima de R$5.000,00 é exibida.
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})