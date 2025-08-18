// cypress/support/commands/common.js
// Este arquivo contém comandos Cypress customizados de uso geral, que podem ser
// utilizados em diversas partes dos testes para interações comuns da UI.

// Comando customizado para verificar se uma mensagem específica é exibida em um elemento 'toast'.
// Útil para validar mensagens de feedback da aplicação (ex: sucesso, erro, avisos).
// Uso: cy.verificarMensagemNoToast('Minha Mensagem')
Cypress.Commands.add('verificarMensagemNoToast', (mensagem) => {
    cy.get('.toast') // Seleciona o elemento com a classe 'toast'
        .should('have.text', mensagem) // Verifica se o texto do elemento corresponde à mensagem esperada
})

// Comando customizado para selecionar uma opção em um componente combobox (dropdown).
// Ele localiza o combobox pela label associada e então clica na opção desejada.
// Uso: cy.selecionarOpcaoComboBox('Label do Campo', 'Opção Desejada')
Cypress.Commands.add('selecionarOpcaoComboBox', (labelDoCampo, opcao) => {
    // Encontra a label do campo e seu pai, e atribui um alias para reutilização.
    cy.get(`label[for="${labelDoCampo}"]`).parent().as(`campo-${labelDoCampo}`)
    cy.get(`@campo-${labelDoCampo}`).click() // Clica no campo para abrir as opções do combobox
    cy.get(`@campo-${labelDoCampo}`).contains(opcao).click() // Encontra e clica na opção desejada dentro do combobox
})