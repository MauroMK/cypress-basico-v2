Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Mauro Moreno')
    cy.get('#lastName').type('Kühl Neto')
    cy.get('#email').type('emailTeste@gmail.com')
    cy.get('#phone').type('998502232')
    cy.get('textarea').type('Teste.')
    cy.contains('Enviar').click()
})