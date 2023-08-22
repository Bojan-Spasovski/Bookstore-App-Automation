import {
  invalidCredentials,
  testCredentials,
  validUser,
  randomUser,
  RegistrationInvalidCredentials,
  
} from "../helper/credentials";
import { booksStoreAppLogin } from "../helper/url";

class Register {
  open() {
    cy.visit(booksStoreAppLogin.urlLogin);
    cy.get("#newUser").click();
  }

  enterNewValidUser() {
    cy.get("#firstname").type(validUser.newValidFirstName);
    cy.get("#lastname").type(validUser.newValidLastName);
    cy.get("#userName").type(validUser.newValidUsername);
    cy.get("#password").type(validUser.newValidPassword);
    //CAPTCHA OBSTRUCTION
    cy.get("#register").click();
  }

  EnterExistingUser() {
    cy.get("#firstname").type(validUser.newValidFirstName);
    cy.get("#lastname").type(validUser.newValidLastName);
    cy.get("#userName").type(testCredentials.userName);
    cy.get("#password").type(testCredentials.userPass);
    //CAPTCHA OBSTRUCTION
    cy.get("#register").click();
  }

  EnterInvalidCredentials() {
    cy.get("#firstname").type(validUser.newValidFirstName);
    cy.get("#lastname").type(validUser.newValidLastName);
    cy.get("#userName").type(testCredentials.userName);
    cy.get("#password").type(RegistrationInvalidCredentials.invalidUserPass);
    //CAPTCHA OBSTRUCTION
    cy.get("#register").click();
  }

  LeaveEmptyFields() {
    cy.get("#register").click();
    cy.get("#firstname").should(
      "have.class",
      "mr-sm-2 is-invalid form-control"
    );
    cy.get("#lastname").should("have.class", "mr-sm-2 is-invalid form-control");
    cy.get("#userName").should("have.class", "mr-sm-2 is-invalid form-control");
    cy.get("#password").should("have.class", "mr-sm-2 is-invalid form-control");
    //CAPTCHA OBSTRUCTION
  }
}

export default new Register();
