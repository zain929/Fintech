import ClientApplication from '../../locators/magwitch-clientFE/ClientApplication';
import { generateRandomUser, FirstFormAppication, existingFormFound } from '../../pageObjects/magwitch-clientFE/commanPage';
import { usSecondScreen } from '../../pageObjects/magwitch-clientFE/usBank';
const { ssn, phone } = generateRandomUser();
describe('Submit the Application to Concora lender', () => {
  beforeEach(() => {
  // Visiting the Url
  cy.visit('https://magwitch.qa.applystage.com/v2/?init_key=08009e6df196822e1d01f8a1d4c80f76c63f30bf28e90e3776292895f567af89');
  cy.get(ClientApplication.loadingSpinner).should('be.visible');
})
  it('Submit the Full Application to US lender', () => {
    cy.runRoutes('clientApplication'); 
    FirstFormAppication('HVAC (New Air Conditioner)',ssn, phone , 'Test', 'QA', '1228 Baltimore Ave, Kansas City, MO, USA', 'AspenPQFApp-1-600@test.com');
    usSecondScreen('15000','20000');
  });
  it('Existing Form Found',()=>{
    cy.runRoutes('clientApplication'); 
    existingFormFound('HVAC (New Air Conditioner)','534653452', '9009009000' , 'Test', 'QA', '1228 Baltimore Ave, Kansas City, MO, USA', 'AspenPQFApp-1-600@test.com');
  })
});
