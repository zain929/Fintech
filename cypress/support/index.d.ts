/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to log in through the UI
     * @example cy.loginWithUI('user', 'password')
     */
    loginWithUI(email: string, password: string): Chainable<void>;

    /**
     * Custom command to handle routes by category
     * @example cy.runRoutes('users')
     */
    runRoutes(category: string): Chainable<any>;
  }
}
