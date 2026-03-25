import {
  generateUniqueCompanyAndEmail,
  getNavigationItem,
  interceptResponseCodeVerification,
  assertAndFillInputField,
  verifyDetails,

} from '../magwitch-portal/commonPage';
import mainAccountLocators from '../../locators/magwitch-portal/MainAccountLocators';
const filePath = 'TestImage.jpg';
export let accountDetails: {
  accountId: string;
  companyName: string;
  contactNumber: string;
  contactEmail: string;
  firstName: string;
  lastName: string;
  status: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bankName: string;
  legalBussinessName: string;
  routingNumber: string;
  accountNumber: string;
  accountHolderName: string;
};


export function createMainAccountWithUi() {
  const { companyName, email } = generateUniqueCompanyAndEmail();

  // Main Account Creation Flow
  getNavigationItem('Main accounts').click({ force: true });
  interceptResponseCodeVerification('@mainAccountList', 200);
  cy.get(mainAccountLocators.addNewButton).should('be.visible').click();
  cy.get(mainAccountLocators.MainAccountInfo.sectionHeading).should(
    'be.visible',
  );
  cy.fixture(filePath).then((fileContent) => {
    cy.get(mainAccountLocators.MainAccountInfo.uplaodImage).first().attachFile(
      filePath,
    );
  });
  interceptResponseCodeVerification('@uploadImage', 201);
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.companyName,
    'Enter company name',
  ).type(companyName);
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.firstName,
    'Enter first name',
  ).type('Test');
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.lastName,
    'Enter last name',
  ).type('user');
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.contactNumber,
    'Enter contact number',
  ).type('2013456789');
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.contactEmail,
    'Enter contact email',
  ).type(email);
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.contactAddress,
    'Enter company address',
  ).type('1516 solano Ave');
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.city,
    'Enter city',
  ).type('Albany');
  cy.get(mainAccountLocators.MainAccountInfo.stateDropdown)
    .should('be.visible')
    .realClick();
  cy.get(mainAccountLocators.MainAccountInfo.stateInputDropdown.stateSearchBar)
    .should('be.visible')
    .type('California');
  interceptResponseCodeVerification('@searchState', 200)
  cy.get(mainAccountLocators.MainAccountInfo.stateInputDropdown.option)
    .contains('California')
    .click();
  assertAndFillInputField(
    mainAccountLocators.MainAccountInfo.zipCode,
    'Enter ZIP code',
  ).type('94707');
  assertAndFillInputField(mainAccountLocators.MainAccountInfo.maProcessing, 'Enter processing fee').type('10')
  assertAndFillInputField(
    mainAccountLocators.BankingInfo.bankName,
    'Enter bank name',
  ).type('Test Bank');
  assertAndFillInputField(
    mainAccountLocators.BankingInfo.legalBussinessName,
    'Enter legal business name',
  ).type('Test');
  assertAndFillInputField(
    mainAccountLocators.BankingInfo.accountNumber,
    'Enter account number',
  ).type('123456');
  assertAndFillInputField(
    mainAccountLocators.BankingInfo.accountHolderName,
    'Enter account holder’s name',
  ).type('Bank User');
  assertAndFillInputField(
    mainAccountLocators.BankingInfo.routingNumber,
    'Enter routing number',
  ).type('123456789');

  cy.get(mainAccountLocators.Buttons.createButton)
    .should('be.visible')
    .realClick();

  // Verifying the details of created account.
  verifyResponseAndGetAccountDetail('@createMainAccount', 201);
  // Updating the created account

  // Account holder Information
  cy.get(mainAccountLocators.mainAccountProfile.AccountHolderInformation.editButton).should('be.visible').click({ force: true })
  cy.get(mainAccountLocators.mainAccountProfile.editModal).should('be.visible');
  cy.get(mainAccountLocators.mainAccountProfile.AccountHolderInformation.EditDetails.firstName)
    .should('be.visible')
    .clear()
    .type('Bot');
  cy.get(mainAccountLocators.mainAccountProfile.AccountHolderInformation.EditDetails.lastName)
    .should('be.visible')
    .type('user');
  cy.get(mainAccountLocators.mainAccountProfile.AccountHolderInformation.EditDetails.contactNumber)
    .should('be.visible')
    .clear()
    .type('2016601294');
  cy.get(mainAccountLocators.mainAccountProfile.AccountHolderInformation.EditDetails.contactEmail)
    .should('be.visible')
    .clear()
    .type(email);
  cy.get(mainAccountLocators.mainAccountProfile.AccountHolderInformation.EditDetails.saveButton)
    .should('be.visible')
    .click();

  // Company Information
  //  cy.get(mainAccountLocators.mainAccountProfile.editModal).should('not.be.visible')
  cy.get(mainAccountLocators.mainAccountProfile.CompanyInformation.editButton).click()
  cy.get(mainAccountLocators.mainAccountProfile.editModal).should('be.visible');
  cy.get(mainAccountLocators.mainAccountProfile.CompanyInformation.EditDetail.companyName)
    .should('be.visible')
    .clear()
    .type(companyName);
  cy.get(mainAccountLocators.mainAccountProfile.CompanyInformation.EditDetail.companyAddress)
    .should('be.visible')
    .clear()
    .type('123 William Test');
  cy.get(mainAccountLocators.mainAccountProfile.CompanyInformation.EditDetail.city)
    .should('be.visible')
    .clear()
    .type('Chicago');
  cy.get(mainAccountLocators.mainAccountProfile.CompanyInformation.EditDetail.zipCode)
    .should('be.visible')
    .clear()
    .type('12345');
  cy.get(mainAccountLocators.mainAccountProfile.CompanyInformation.EditDetail.savebutton).click();

  //Banking Information
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.editButton).click()
  cy.get(mainAccountLocators.mainAccountProfile.editModal).should('be.visible');
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.EditDetails.bankName)
    .should('be.visible')
    .clear()
    .type('Bot Bank');
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.EditDetails.legalBussinessName)
    .should('be.visible')
    .clear()
    .type('DID');
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.EditDetails.routingNumber)
    .should('be.visible')
    .clear()
    .type('011401533');
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.EditDetails.accountNumber)
    .should('be.visible')
    .clear()
    .type('67890');
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.EditDetails.accountHolderName)
    .should('be.visible')
    .clear()
    .type('Bot');
  cy.get(mainAccountLocators.mainAccountProfile.BankingInfo.EditDetails.saveButton).should('be.visible').click({ force: true })
  cy.get(mainAccountLocators.mainAccountProfile.successMessage).should('be.visible')
}
export function verifyResponseAndGetAccountDetail(
  alais: string,
  statusCode: number,
  timeout?: number,
) {
  cy.wait(alais).then((interception) => {
    if (interception?.response?.statusCode === statusCode) {
      const responseBody = interception.response.body?.data;

      accountDetails = {
        accountId: responseBody?.item_id,
        companyName: responseBody?.company_name,
        contactNumber: responseBody?.contact_number,
        contactEmail: responseBody?.contact_email,
        firstName: responseBody?.first_name,
        lastName: responseBody?.last_name,
        status: responseBody?.status,
        address: responseBody?.company_address,
        city: responseBody?.city,
        state: responseBody?.state_id,
        zipCode: responseBody?.zip_code,
        bankName: responseBody?.bank_details.bank_name,
        legalBussinessName: responseBody?.bank_details.legal_business_name,
        routingNumber: responseBody?.bank_details.routing_number,
        accountNumber: responseBody?.bank_details.accounting_number,
        accountHolderName: responseBody?.bank_details.account_holder_name,
      };
      // accountDetails = responseBody?
      cy.get(mainAccountLocators.Buttons.sucessmessage).should('be.visible');
      cy.get(mainAccountLocators.Buttons.okayButton)
        .contains('Okay')
        .and('be.visible')
        .click();

      cy.log('Stored Account Details:', JSON.stringify(accountDetails));
      // Verify the details of Created Main Account
      verifyAccountDetailsOnProfilePage(
        accountDetails.accountId,
        accountDetails.companyName,
        accountDetails.contactNumber,
        accountDetails.status,
        accountDetails.firstName,
        accountDetails.lastName,
        accountDetails.contactEmail,
        accountDetails.address,
        accountDetails.city,
        accountDetails.state,
        accountDetails.zipCode,
        accountDetails.bankName,
        accountDetails.legalBussinessName,
        accountDetails.routingNumber,
        accountDetails.accountNumber,
        accountDetails.accountHolderName,
      );
    }
  });
}
export function verifyAccountDetailsOnProfilePage(
  accountId: string,
  companyName: string,
  contactNumber: string,
  status: string,
  firstName: string,
  lastName: string,
  contactEmail: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  bankName: string,
  legalBussinessName: string,
  routingNumber: string,
  accountNumber: string,
  accountHolderName: string,
) {
  assertAndFillInputField(
    mainAccountLocators.searchbar,
    'Search',
  ).type(accountId);
  const maskedAccountNumber = accountDetails.accountNumber
    ? `**${accountDetails.accountNumber.slice(-4)}`
    : '';
  cy.get(mainAccountLocators.tableItem).should('be.visible').realClick();
  cy.get(mainAccountLocators.mainAccountProfile.companyName).contains(
    companyName,
  );
  cy.get(mainAccountLocators.mainAccountProfile.accountId).contains(accountId);
  cy.get(mainAccountLocators.mainAccountProfile.accountStatus).contains(status);
  if (status == 'Pending') {
    cy.get(mainAccountLocators.mainAccountProfile.resendButton).should(
      'be.visible',
    );
  }
  verifyDetails(mainAccountLocators.mainAccountProfile.AccountHolderInformation.firstName, firstName)
  verifyDetails(mainAccountLocators.mainAccountProfile.AccountHolderInformation.lastName, lastName);
  verifyDetails(mainAccountLocators.mainAccountProfile.AccountHolderInformation.contactNumber, contactNumber);
  verifyDetails(mainAccountLocators.mainAccountProfile.AccountHolderInformation.contactEmail, contactEmail);
  verifyDetails(mainAccountLocators.mainAccountProfile.CompanyInformation.companyAddress, address);
  verifyDetails(mainAccountLocators.mainAccountProfile.CompanyInformation.city, city);
  verifyDetails(mainAccountLocators.mainAccountProfile.CompanyInformation.zipCode, zipCode);
  verifyDetails(mainAccountLocators.mainAccountProfile.BankingInfo.bankName, bankName);
  verifyDetails(mainAccountLocators.mainAccountProfile.BankingInfo.legalName, legalBussinessName);
  verifyDetails(mainAccountLocators.mainAccountProfile.BankingInfo.routingNumber, routingNumber);
  verifyDetails(mainAccountLocators.mainAccountProfile.BankingInfo.accountNumber, maskedAccountNumber);
  verifyDetails(mainAccountLocators.mainAccountProfile.BankingInfo.accountHolderName, accountHolderName);
}
