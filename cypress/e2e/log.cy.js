let getText;
describe("find text of an element in cypress ", () => {

    it("Find Text - using variable ", () => {
        cy.visit("https://www.linkedin.com/")
        cy.get('[data-test-id="hero__headline"]').then(($value) => {
            getText = $value.text()
        cy.log(getText)
        })
    })
})
