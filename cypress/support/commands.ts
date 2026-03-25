/// <reference types="cypress" />
import "cypress-file-upload";
import login from "../locators/magwitch-portal/LoginLocators"


Cypress.Commands.add("loginWithUI", (email, password) => {

    cy.visit('/');
    cy.get(login.emailField).should('be.visible').type(email);
    cy.get(login.passwordField).should('be.visible').type(password);
    cy.get(login.loginButton).should('be.enabled').click();
});
Cypress.Commands.add("runRoutes", (category) => {
    const baseApiUrl = Cypress.env('baseApiUrl');

    if (category == "login") {
        cy.intercept("POST", `${baseApiUrl}/auth/login`).as("login",);
    }
    else if (category == "mainAccount") {
        cy.intercept("GET", `${baseApiUrl}/main-accounts/?per_page=50&order_by=&order=desc&status_key=&page=1`).as("mainAccountList");
        cy.intercept("POST", `${baseApiUrl}/files`).as("uploadImage");
        cy.intercept("POST", `${baseApiUrl}/main-accounts`).as('createMainAccount');
        cy.intercept("POST", `${baseApiUrl}/main-accounts/?per_page=50&search=98968&order_by=&order=desc&status_key=&page=1`).as("searchAccount")
        cy.intercept("GET", `${baseApiUrl}/states?per_page=999&name=California`).as('searchState')
    }
    else if (category == "partnerAccount") {
        cy.intercept('POST', `${baseApiUrl}/files`).as("uploadImage")
        cy.intercept('POST', `${(baseApiUrl)}/states?per_page=999&name=cal`)


    }
    else if (category == "clientApplication") {
        cy.intercept('POST', `${baseApiUrl}/v2/client/auth/form?init_key=f450dcbe37906f473f4b10d3cb31ce96185ef82baf5db2306589e1f17830ecbc`).as('sendSms')
        cy.intercept('POST',`${baseApiUrl}/v2/client/process`).as('submitApplication')
        cy.intercept('POST',`${baseApiUrl}/v2/client/auth/form?init_key=08009e6df196822e1d01f8a1d4c80f76c63f30bf28e90e3776292895f567af89`).as('existingFormFound')
        cy.intercept('POST',`${baseApiUrl}/v2/client/screen`).as('screen')
    }

});