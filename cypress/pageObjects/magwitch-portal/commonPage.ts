import dashboardLocators from '../../locators/magwitch-portal/Dashboard';
import PartnerAccountLocators from '../../locators/magwitch-portal/PartnerAccountLocators';

const filePath = 'TestImage.jpg';

// Intercept Function
export function interceptResponseCodeVerification(
  alias: string,
  statusCode: number,
  timeout?: number,
) {
  cy.wait(alias, timeout ? { timeout } : undefined)
    .its('response.statusCode')
    .should('eq', statusCode);
}
// Dashboard heading
export function verifyDashboardHeading() {
  cy.get(dashboardLocators.dashboardHeading).should('be.visible');
}
// Fucntion to generate random and Unique string
export const generateRandomString = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
// function to create unique email
export const generateUniqueCompanyAndEmail = (): {
  companyName: string;
  email: string;
} => {
  const randomString = generateRandomString(10); // Generate a shared random string of 10 characters
  const companyName = `automationTest-${randomString}`; // Use the random string in the company name
  const email = `test${randomString}+cypress@test.magwitch.io`; // Use the same random string in the email
  return { companyName, email };
};
// Get Left Navbar buttons
export function getNavigationItem(name: string) {
  return cy.get(dashboardLocators.leftNavBar.mainAccount).contains(name)
}
// Fucntion to verify the placeholders texts
export function assertAndFillInputField(loc: string, txt: string) {
  return cy.get(loc).should('be.visible').and('have.attr', 'placeholder', txt);
}

export function UploadFile(index: number, fileLocation: string) {
  cy.fixture(fileLocation).then((fileContent) => {
    cy.get(PartnerAccountLocators.AddPartner.uploadButton)
      .eq(index)
      .attachFile(fileLocation,);
  });
}
// Function to verify the Main Account details
export function verifyDetails(loc: string, value: string) {
  cy.get(loc)
    .contains(value);
}

export function refresh(){
  cy.request('qa-api.loginstage.com/_cypress/refresh')
}
