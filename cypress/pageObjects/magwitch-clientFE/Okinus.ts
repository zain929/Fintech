import ClientApplication from "../../locators/magwitch-clientFE/ClientApplication"
import { interceptResponseCodeVerification } from "../magwitch-portal/commonPage"
import { offerMadeScreen } from "./commanPage"

export function OkinusScreen(financingAmount: string, annualIncome: string, product: string, employmentStatus:string) {
    cy.get(ClientApplication.SecondForm.financingAmount).should('be.visible').clear().type(financingAmount)
    cy.get(ClientApplication.SecondForm.annualIncome).should('be.visible').type(annualIncome)
    cy.get(ClientApplication.SecondForm.employmentStatus.Dropdown.field).should('be.visible').click();
    cy.get(ClientApplication.SecondForm.employmentStatus.Dropdown.list).should('be.visible');
    cy.get(ClientApplication.SecondForm.employmentStatus.Dropdown.selection).contains(employmentStatus).click()
    cy.get(ClientApplication.SecondForm.termsCheckBox).check({ force: true })
    cy.get(ClientApplication.SecondForm.submitButton).should('be.visible').click();
    interceptResponseCodeVerification('@submitApplication', 201)
    offerMadeScreen();

}