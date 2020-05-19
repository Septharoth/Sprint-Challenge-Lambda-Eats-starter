
beforeEach(function () {
    cy.visit('http://localhost:3000/order-pizza');
})
describe('Test our form inputs', function () {
    it('adds text to name input', function () {
        cy.get("#size")
            .select("md")
            .should("have.value", "md")
            
        cy.get('[type="radio"]')
            .check('marinara')

        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked")

        cy.contains("Submit")
            .click({ force: true });

    })
})
