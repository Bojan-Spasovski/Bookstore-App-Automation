import { concat } from "lodash";
import Register from "../pageObject/registerClass";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Register", () => {
  it("BS_REGISTER_001 - Should register a new user", () => {
    Register.open();
    Register.enterNewValidUser();
  });

  it("BS_REGISTER_002 - Should verify existing user", () => {
    Register.open();
    Register.EnterExistingUser();
  });

  it("BS_REGISTER_003 - Should verify invalid credentials", () => {
    Register.open();
    Register.EnterInvalidCredentials();
  });

  it("BS_REGISTER_004 - Should verify empty fields", () => {
    Register.open();
    Register.LeaveEmptyFields();
  });
});
