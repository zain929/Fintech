import ClearFilterIcon from "../../../src/components/icons/ClearFilterIcon";
import ClientApplication from "../../locators/magwitch-clientFE/ClientApplication"
import { interceptResponseCodeVerification } from "../magwitch-portal/commonPage";
export function FirstFormAppication(product: string, ssn: string, phoneNumber: string, firstName: string, lastName: string, address: string, email: string,) {
  cy.get(ClientApplication.logo).should('be.visible');
  cy.get(ClientApplication.disclosure.openButton).should('be.visible').and('not.be.disabled').click();
  cy.get(ClientApplication.disclosure.modal).should('be.visible');
  cy.get(ClientApplication.disclosure.crossButton).should('be.visible').click();
  cy.get(ClientApplication.title).contains('Welcome To Magwitch!');
  cy.get(ClientApplication.subTitle).contains('Start your financing journey by clicking the button below.');
  cy.contains('button', 'New Application').should('be.visible').click()
  cy.get(ClientApplication.FirstScreen.form).should('be.visible');
  cy.get(ClientApplication.FirstScreen.logo).should('be.visible');
  cy.contains('span', 'Disclosures').should('be.visible')
  cy.get(ClientApplication.title).contains('Precheck Your Eligibility!');
  cy.get(ClientApplication.FirstScreen.subTitle).contains('Complete this simple application to see if you may be eligible for financing.')
  cy.get(ClientApplication.placeholder).contains('Financing type');
  cy.get(ClientApplication.FirstScreen.product).click()
  cy.get('input#search').should('be.visible').type(product);
  cy.contains('.ant-select-item', product).should('be.visible').click()
  cy.get(ClientApplication.placeholder).contains('Legal first name');
  cy.get(ClientApplication.FirstScreen.firstName).type(firstName)
  cy.get(ClientApplication.placeholder).contains('Legal last name');
  cy.get(ClientApplication.FirstScreen.lastName).type(lastName)
  cy.get(ClientApplication.placeholder).contains('Street address');
  cy.get(ClientApplication.placeholder).contains('Apt/suite/unit');
  cy.get(ClientApplication.placeholder).contains('City');
  cy.get(ClientApplication.placeholder).contains('State');
  cy.get(ClientApplication.placeholder).contains('ZIP code');
  cy.get(ClientApplication.FirstScreen.address).type(address)
  cy.get(ClientApplication.FirstScreen.addressOption).should('be.visible').and('have.text',address).click();
  cy.get(ClientApplication.placeholder).contains('SSN');
  cy.get(ClientApplication.FirstScreen.ssn).type(ssn)
  cy.get(ClientApplication.placeholder).contains('Date of birth (mm/dd/yyyy)');
  cy.get(ClientApplication.FirstScreen.dateOfBirth).type('12122000')
  cy.get(ClientApplication.placeholder).contains('Phone number');
  cy.get(ClientApplication.FirstScreen.phoneNumber).type(phoneNumber)
  cy.get(ClientApplication.placeholder).contains('Email address');
  cy.get(ClientApplication.FirstScreen.emailField).type(email)
  cy.get(ClientApplication.placeholder).contains('Confirm email address');
  cy.get(ClientApplication.FirstScreen.confirmationEmail).type(email)
  cy.contains('button', 'Next').click();



  //Conditional: Click "Start New" button only if it's visible
  cy.get('body').then(($body) => {
    if ($body.find('button:contains("Start New")').length > 0) {
      cy.contains('button', 'Start New').should('be.visible').click()
      console.log('Start New')
    }
    else {
      console.log('Incomplete Application Not Found')
    }
  })
  // OTP Code Verification
  cy.get(ClientApplication.Otp.popUp).should('be.visible');
  // cy.get(ClientApplication.Otp.discloureButton).should('be.visible').and('not.be.disabled');
  // cy.get(ClientApplication.Otp.title).contains('Please Provide Your OTP')
  // cy.get(ClientApplication.Otp.subtitle).should('be.visible');
  // cy.get(ClientApplication.Otp.text).should('be.visible');
  cy.get('input[type="tel"][inputmode="numeric"]').first().clear().type('4124')
  cy.contains('Verify').should('be.visible').click()
  cy.get(ClientApplication.loadingSpinner).should('be.visible');
  cy.wait(5000)


  cy.get('body').then(($body) => {
    const errorDiv = $body.find('div.flex.items-center.justify-center').filter(':contains("Invalid OTP! Please try again.")')
    if (errorDiv.length > 0 || $body.text().includes('Invalid OTP! Please try again.')) {
      console.log('Invalid OTP detected, waiting for 5 minutes timer...')
      cy.wait(300000)
      cy.get('span').contains('Resend').should('be.visible').click()
      console.log('Resend button clicked')
      cy.wait(2000)
      cy.get('input[type="tel"][inputmode="numeric"]').first().clear().type('4124')
      cy.contains('Verify').should('be.visible').click()
      console.log('OTP re-entered and verify clicked')
    }
    else {
      console.log('OTP accepted on first try')
    }
  })
}

export function generateRandomSSN(): string {
  const area = Math.floor(Math.random() * 899) + 1; // 001-899
  const group = Math.floor(Math.random() * 99) + 1;  // 01-99
  const serial = Math.floor(Math.random() * 9999) + 1; // 0001-9999

  const safeArea = area === 666 ? 665 : area; // avoid 666
  return `${safeArea.toString().padStart(3, '0')}-${group
    .toString()
    .padStart(2, '0')}-${serial.toString().padStart(4, '0')}`;
}

export function generateRandomPhone(): string {
  const areaCode = Math.floor(Math.random() * (999 - 201 + 1)) + 201; // 201-999
  const exchange = Math.floor(Math.random() * (999 - 201 + 1)) + 201; // 201-999
  const subscriber = Math.floor(Math.random() * 10000); // 0000-9999

  return `(${areaCode}) ${exchange}-${subscriber.toString().padStart(4, '0')}`;
}

// Optional helper to generate both together
export function generateRandomUser(): { ssn: string; phone: string } {
  return {
    ssn: generateRandomSSN(),
    phone: generateRandomPhone(),
  };
}
export function offerMadeScreen(){
  cy.get(ClientApplication.Offers.popUp).should('be.visible');
    cy.get(ClientApplication.Offers.discloureButton).should('be.visible').and('not.be.disabled');
    cy.get(ClientApplication.Offers.progressbar).should('be.visible')
    cy.get(ClientApplication.Offers.appLocked.Title).should('be.visible')
    cy.get(ClientApplication.Offers.appLocked.text).should('be.visible')
    cy.contains('button', 'Unlock Application')
    .should('be.visible').and('have.text', 'Unlock Application');
}
export function existingFormFound(product: string, ssn: string, phoneNumber: string, firstName: string, lastName: string, address: string, email: string){
  cy.get(ClientApplication.logo).should('be.visible');
  cy.get(ClientApplication.disclosure.openButton).should('be.visible').and('not.be.disabled').click();
  cy.get(ClientApplication.disclosure.modal).should('be.visible');
  cy.get(ClientApplication.disclosure.crossButton).should('be.visible').click();
  cy.get(ClientApplication.title).contains('Welcome To Magwitch!');
  cy.get(ClientApplication.subTitle).contains('Start your financing journey by clicking the button below.');
  cy.contains('button', 'New Application').should('be.visible').click()
  cy.get(ClientApplication.FirstScreen.form).should('be.visible');
  cy.get(ClientApplication.FirstScreen.logo).should('be.visible');
  cy.contains('span', 'Disclosures').should('be.visible')
  cy.get(ClientApplication.title).contains('Precheck Your Eligibility!');
  cy.get(ClientApplication.FirstScreen.subTitle).contains('Complete this simple application to see if you may be eligible for financing.')
  cy.get(ClientApplication.placeholder).contains('Financing type');
  cy.get(ClientApplication.FirstScreen.product).click()
  cy.get('input#search').should('be.visible').type(product);
  cy.contains('.ant-select-item', product).should('be.visible').click()
  cy.get(ClientApplication.placeholder).contains('Legal first name');
  cy.get(ClientApplication.FirstScreen.firstName).type(firstName)
  cy.get(ClientApplication.placeholder).contains('Legal last name');
  cy.get(ClientApplication.FirstScreen.lastName).type(lastName)
  cy.get(ClientApplication.placeholder).contains('Street address');
  cy.get(ClientApplication.placeholder).contains('Apt/suite/unit');
  cy.get(ClientApplication.placeholder).contains('City');
  cy.get(ClientApplication.placeholder).contains('State');
  cy.get(ClientApplication.placeholder).contains('ZIP code');
  cy.get(ClientApplication.FirstScreen.address).type(address)
  cy.get(ClientApplication.FirstScreen.addressOption).should('be.visible').contains(address).click();
  cy.get(ClientApplication.placeholder).contains('SSN');
  cy.get(ClientApplication.FirstScreen.ssn).type(ssn)
  cy.get(ClientApplication.placeholder).contains('Date of birth (mm/dd/yyyy)');
  cy.get(ClientApplication.FirstScreen.dateOfBirth).type('12122000')
  cy.get(ClientApplication.placeholder).contains('Phone number');
  cy.get(ClientApplication.FirstScreen.phoneNumber).type(phoneNumber)
  cy.get(ClientApplication.placeholder).contains('Email address');
  cy.get(ClientApplication.FirstScreen.emailField).type(email)
  cy.get(ClientApplication.placeholder).contains('Confirm email address');
  cy.get(ClientApplication.FirstScreen.confirmationEmail).type(email)
  cy.contains('button', 'Next').click();
  interceptResponseCodeVerification('@existingFormFound',201);
  cy.get(ClientApplication.ExistingFormFound.popUp).should('be.visible');
  cy.get(ClientApplication.ExistingFormFound.logo).should('be.visible');
  cy.get(ClientApplication.ExistingFormFound.title).contains('Existing application found!').should('be.visible')
  cy.get(ClientApplication.ExistingFormFound.subTitle).contains("We've identified that you already have an existing application. Please select 'Continue' to proceed with completing or reviewing your application").should('be.visible')
  cy.get(ClientApplication.ExistingFormFound.continueButton).should('be.visible')


}
