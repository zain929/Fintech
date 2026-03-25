import ClientApplication from '../../locators/magwitch-clientFE/ClientApplication';
import { generateRandomUser, FirstFormAppication } from '../../pageObjects/magwitch-clientFE/commanPage';
import { OkinusScreen } from '../../pageObjects/magwitch-clientFE/Okinus';
const { ssn, phone } = generateRandomUser();
describe('Submit the Application to Concora lender', () => {
  it('Submit the Application to Concora lender', () => {
    cy.runRoutes('clientApplication');
    cy.visit('https://magwitch.qa.applystage.com/v2/?init_key=f450dcbe37906f473f4b10d3cb31ce96185ef82baf5db2306589e1f17830ecbc')
    cy.get(ClientApplication.loadingSpinner).should('be.visible');
    FirstFormAppication('HVAC (New Air Conditioner)',ssn, phone, 'Test', 'QA', '1516 Solano Ave, Albany, CA 94707, USA', 'AspenPQFApp-1-600@test.com');
    OkinusScreen('15000','20000', 'HVAC (New Air Conditioner)', 'Employed');
  });
});
