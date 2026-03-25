import ClientApplication from "../../locators/magwitch-clientFE/ClientApplication"
import { interceptResponseCodeVerification } from "../magwitch-portal/commonPage"
import { offerMadeScreen } from "./commanPage";

export function usSecondScreen(financingAmount: string, annualIncome: string) {
    cy.get(ClientApplication.SecondForm.financingAmount).should('be.visible').clear().type(financingAmount)
    cy.get(ClientApplication.SecondForm.annualIncome).should('be.visible').type(annualIncome)
    cy.get(ClientApplication.SecondForm.termsCheckBox).check({ force: true })
    cy.get(ClientApplication.SecondForm.submitButton).should('be.visible').click();
    interceptResponseCodeVerification('@submitApplication', 201)
    offerMadeScreen();
    cy.get(ClientApplication.Offers.lender.Us.loanTitle).contains('Installment').should('be.visible');
    cy.get(ClientApplication.Offers.lender.Us.details).should('be.visible');
    cy.contains('Check Eligibility').click();
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.title).contains('Check Eligibility').should('be.visible');
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.subTitle).contains('Review disclosures to check pre-qualification eligibility').should('be.visible');
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.document).should('be.visible');
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.country.Title).should('be.visible');
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.country.Dropdown.field).should('be.visible').click();
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.country.Dropdown.list).should('be.visible');
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.country.Dropdown.selection).contains('United States of America').click();
    cy.get(ClientApplication.Offers.lender.Us.CheckEligibilityScreen.Buttons.Agree).should('be.visible').click()
    cy.get(ClientApplication.loadingSpinner).should('be.visible');
    interceptResponseCodeVerification('@submitApplication', 201);
    interceptResponseCodeVerification('@submitApplication', 201);
    interceptResponseCodeVerification('@screen', 201)
    cy.wait('@screen').then(({ response }) => {
  const screen = response?.body.next.screen.clientScreen;

  if (screen === 'preliminary_no_offer') {
    cy.get(ClientApplication.ExistingFormFound.popUp).should('be.visible');

  }
});
    


}