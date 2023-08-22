import Login from "../pageObject/loginClass";
import BookStore from "../pageObject/bookStoreClass";
import Profile from "../pageObject/profileClass";
import Register from "../pageObject/registerClass";
import { testCredentials } from "../helper/credentials";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Profile", () => {
  beforeEach(() => {
    Login.open();
    Login.enterUserName();
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-2").click({
      force: true,
    });
    cy.wait(2000);
  });

  it("BS_PROFILE_001 - Should search existing books", () => {
    BookStore.addBook();
    Profile.returnToBookStore();
    Profile.searchProfileBookItems();
  });

  it("BS_PROFILE_002 - Should search non-existing profile books", () => {
    Profile.searchProfileNonExistingBookItems();
  });

  it("BS_PROFILE_003 - Should view profile book item details", () => {
    Profile.profileBookItemDetails();
  });

  it("BS_PROFILE_004 - Should delete a single item", () => {
    Profile.profileDeleteBook();
  });

  it("BS_PROFILE_005 - Should delete all books from the collection", () => {
    Profile.profileDeleteAllBooks();
  });

  it("BS_PROFILE_006 - Should log the user out", () => {
    Profile.profileLogOut();
  });

  it("BS_PROFILE_007 - Should visit Book Store", () => {
    Profile.profileVisitBookStore();
  });

  it("BS_PROFILE_008 - Should delete the users account", () => {
    // If test is rerun Create user manually due to CAPTCHA obstruction
    Profile.profileDeleteUserAccount();
  });

  it("BS_PROFILE_009 - Should check if the right user is logged in ", () => {
    Profile.profileCheckUser();
  });
});
