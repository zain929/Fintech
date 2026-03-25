import ClientApplication from "../../locators/magwitch-clientFE/ClientApplication"
import { interceptResponseCodeVerification } from "../magwitch-portal/commonPage"
import { offerMadeScreen } from "./commanPage"

export function concoraSecondScreen(financingAmount: string, annualIncome: string, product:string) {
    cy.get(ClientApplication.SecondForm.financingAmount).should('be.visible').clear().type(financingAmount)
    cy.contains(ClientApplication.SecondForm.PropertyStatus.button,'Own')
    cy.get(ClientApplication.SecondForm.PropertyStatus.checkbox).click()
    cy.get(ClientApplication.SecondForm.annualIncome).should('be.visible').type(annualIncome)
    cy.get(ClientApplication.SecondForm.termsCheckBox).check({ force: true })
    cy.get(ClientApplication.SecondForm.submitButton).should('be.visible').click();
    interceptResponseCodeVerification('@submitApplication', 201)
    offerMadeScreen();

}