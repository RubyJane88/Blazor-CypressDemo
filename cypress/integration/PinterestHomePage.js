/// <reference types="cypress"/>


describe.skip("basic tests on Pinterest website", () => {
    beforeEach(() => {
        cy.visit("https://www.pinterest.com/");
        cy.viewport(1280, 720);
    });


    /*
      Logging into the UI is an anti-pattern, we'll just do this for demo purposes to test input fields
      */

    it('should should be able to click on the Login Page', () => {
        cy.contains("Log in").click();
        cy.contains("email").type("ruby.jane.cabagnot@avanade.com");
        cy.contains("password").type("Pass123!");

        //since it's a dummy sign in credentials..

        cy.contains("Let's find your Pinterest account").should('exist');

        //But the best way to get or type in input fields to use custom attributes 
        //* this is if you're able to go inside and edit it
        cy.get('[data-testid=email]').type('bobafett@kamino.com');
        cy.get('[data-testid=password]').type('jango!@');

    });

});
