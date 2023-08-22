import Login from "../pageObject/loginClass";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Login", () => {
  beforeEach(() => {
    Login.open();
  });

  it("BS_LOGIN_002 - Should verify log in with invalid credentials", () => {
    Login.enterInvaidCredentials();
    cy.get("#name")
      .should("be.visible")
      .contains("Invalid username or password!");
  });

  it("BS_LOGIN_001 - Should successfully log in", () => {
    Login.enterUserName();
    cy.url().should("eq", "https://demoqa.com/profile");
  });

  it("BS_LOGIN_003 - Should verify empty fields", () => {
    cy.get("#login").click();
    cy.get("#userName").should("have.class", "mr-sm-2 is-invalid form-control");
    cy.get("#password").should("have.class", "mr-sm-2 is-invalid form-control");
  });

  it("BS_LOGIN_004 - Should successfully log the user out", () => {
    Login.enterUserName();
    cy.url().should("eq", "https://demoqa.com/profile");
    Login.logOut();
    cy.url().should("eq", "https://demoqa.com/login");
  });
});
