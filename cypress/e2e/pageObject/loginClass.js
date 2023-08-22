/// <reference types="Cypress" />

import { invalidCredentials, testCredentials } from "../helper/credentials";
import { booksStoreAppLogin } from "../helper/url";

class Login {
  open() {
    cy.visit(booksStoreAppLogin.urlLogin);
  }
  enterUserName() {
    cy.get("#userName").type(testCredentials.userName);
    cy.get("#password").type(testCredentials.userPass);
    cy.get("#login").click();
  }
  enterInvaidCredentials() {
    cy.get("#userName").type(invalidCredentials.invalidUserName);
    cy.get("#password").type(invalidCredentials.invalidUserPass);
    cy.get("#login").click();
  }

  logOut() {
    cy.get("#books-wrapper > .text-right > #submit").click();
  }
}

export default new Login();
