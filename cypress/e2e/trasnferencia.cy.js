describe.only('Trasnferências', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
        //cy.screenshot('apos-clicar-entrar')  função para tirar screenshot após determinada ação, pode usar em qlq lugar do cenário de teste
    })
    it('Deve transferir quando informo dados e valores validos', () => {
        cy.realizarTransferencia('Chaves', 'Seu Madruga', '10')

        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {
        cy.realizarTransferencia('Chaves', 'Seu Madruga', '6000')

        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})