describe.only('Trasnferências', () => {
    beforeEach(() => {
        cy.visit('/')
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
    })
    it('Deve transferir quando informo dados e valores validos', () => {
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains('Chaves').click()

        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains('Seu Madruga').click()

        cy.get('#valor')
            .click()
            .type('10')

        cy.contains('Transferir').click()

        cy.get('.toast').should('have.text', 'Transferência realizada!')
    })
})