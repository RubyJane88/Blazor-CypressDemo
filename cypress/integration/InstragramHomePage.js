
/// <reference types="cypress"/>

// For JavaScript developers
describe("Instagram", () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit("https://www.instagram.com/");
    });

    it('should display Instagram page', () => {
        cy.contains("Accept cookies from Instagram").should("exist");
        cy.contains("Accept All").click();
        cy.contains("username").type("ruby.jane.cabagnot@avanade.com");

     
    });
});
