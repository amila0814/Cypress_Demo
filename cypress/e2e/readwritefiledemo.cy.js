
before(function () {

    cy.fixture('example').as('test_data')
})

it('Read file using Fixture', function () {

    cy.fixture('example').then((data) => {

        cy.log(data.name)
        cy.log(data.email)

    })

    cy.log(this.test_data.name)
})

it('Read file using readFile()', function () {

    cy.readFile('./cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)

    })
})

it('Write file demo', function () {

    cy.writeFile('./cypress/fixtures/sample.txt', 'Hello, I am Amila\n')
    cy.writeFile('./cypress/fixtures/sample.txt', 'I am learning Cypress', { flag: 'a+' })
})

