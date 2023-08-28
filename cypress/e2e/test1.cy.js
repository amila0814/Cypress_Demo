it('Google Search',() => {
    cy.visit('https://google.com')

    cy.get('.SDkEP').type('Automation step by step{Enter}')

    //cy.contains('Google Search').click()

})