Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Mauro Moreno')
    cy.get('#lastName').type('Kühl Neto')
    cy.get('#email').type('teste@tarolho.com')
    cy.get('#phone').type('998502232')
    cy.get('textarea').type('Carrodesom')
    cy.contains('Enviar').click()
})