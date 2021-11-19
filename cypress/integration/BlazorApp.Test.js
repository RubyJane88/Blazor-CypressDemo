//contains the test or spec file

/// <reference types="cypress"/>

// For DotNet developers
describe("Blazor", () => {
    beforeEach(() => {
        //bootstrapping external things
        cy.viewport(1280, 720);
        cy.visit("https://localhost:7232/");
    });

    it('should display Blazor app', () => {
        cy.contains("Blazor");
    });

    it("should navigate to Counter Page", () => {
        cy.contains("Counter").click();
    });

    it("should be able to increment the number of the counter button",
        () => {
            cy.contains("Counter").click();
            cy.url().should('include', '/counter');

            cy.get("[data-testid=counter-button]").click();
            cy.contains("0").should("not.exist");
        });
    
       it("should be able to navigate to the Fetch Data page",
           () => {
               cy.get("[data-testid=fetch-data]").click();
               cy.url().should('include', '/fetchdata');
    
           });


        it("should be able to navigate to the Homepage", () => { 
            cy.get("[data-testid=home-link]").click();
            cy.url().should('include', '/');



        });



           
});