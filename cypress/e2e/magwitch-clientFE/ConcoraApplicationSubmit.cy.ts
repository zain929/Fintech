import ClientApplication from '../../locators/magwitch-clientFE/ClientApplication';
import { generateRandomUser, FirstFormAppication } from '../../pageObjects/magwitch-clientFE/commanPage';
import { concoraSecondScreen } from '../../pageObjects/magwitch-clientFE/ConcoraApp';
const { ssn, phone } = generateRandomUser();
describe('Submit the Application to Concora lender', () => {
  
  it('Submit the Application to Concora lender', () => {
    cy.runRoutes('clientApplication');
    cy.visit('https://magwitch.qa.applystage.com/v2/?init_key=7eddb3ac914f04a89aaa74ff8690bb9477f2c537b446d80f33a1bb289b25a662')
    cy.get(ClientApplication.loadingSpinner).should('be.visible');
    FirstFormAppication('HVAC (New Air Conditioner)',ssn, phone, 'Test', 'QA', '1516 Solano Ave, Albany, CA 94707, USA', 'AspenPQFApp-1-600@test.com');
    concoraSecondScreen('15000','20000', 'HVAC (New Air Conditioner)');
    
  });
});
