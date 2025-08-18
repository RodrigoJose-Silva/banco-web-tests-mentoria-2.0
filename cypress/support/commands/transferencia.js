// cypress/support/commands/transferencia.js
// Este arquivo contém comandos Cypress customizados relacionados à funcionalidade de transferência.
// Ele automatiza o processo de preencher os campos de transferência e submeter o formulário.

// Comando customizado para realizar uma transferência entre contas.
// Uso: cy.realizarTransferencia('Conta de Origem', 'Conta de Destino', 'Valor')
Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    // Seleciona a conta de origem usando o comando customizado 'selecionarOpcaoComboBox'
    cy.selecionarOpcaoComboBox('conta-origem', contaOrigem)
    // Seleciona a conta de destino usando o comando customizado 'selecionarOpcaoComboBox'
    cy.selecionarOpcaoComboBox('conta-destino', contaDestino)

    // Preenche o campo de valor com o valor da transferência
    cy.get('#valor')
        .click()
        .type(valor)

    // Clica no botão 'Transferir' para finalizar a operação
    cy.contains('Transferir').click()
})