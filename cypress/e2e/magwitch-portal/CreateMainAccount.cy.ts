import { createMainAccountWithUi } from '../../pageObjects/magwitch-portal/mainAccount';


import {
  interceptResponseCodeVerification,
  refresh,
  verifyDashboardHeading,
} from '../../pageObjects/magwitch-portal/commonPage';
describe('Create, Read and Update Main Account', () => {
  beforeEach(() => {
    // Visiting baseUrl and performing login fucntion with Assertions
    cy.loginWithUI(Cypress.env('userId'), Cypress.env('password'));
    cy.runRoutes('login');
    cy.runRoutes('mainAccount');
    interceptResponseCodeVerification('@login', 204); // Verifying API resposne
  });
  it('Create, Read and Update Non WL Account', () => {
    // Creating, Reading and Updating the Main Account
    createMainAccountWithUi();
    refresh();

  });
});
