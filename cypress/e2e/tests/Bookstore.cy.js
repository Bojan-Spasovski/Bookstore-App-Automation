import Login from "../pageObject/loginClass";
import BookStore from "../pageObject/bookStoreClass";
import Profile from "../pageObject/profileClass";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("BookStore", () => {
  beforeEach(() => {
    Login.open();
    Login.enterUserName();
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-2").click({
      force: true,
    });
  });

  it("BS_BOOK_STORE_001 - Should search and verify existing book items", () => {
    BookStore.searchExistingBooks();
  });

  it("BS_BOOK_STORE_002 - Should search and verify non-existing book items", () => {
    BookStore.searchNonExistingBooks();
  });

  it("BS_BOOK_STORE_003 - Should access specific book item details", () => {
    BookStore.bookItemDetails();
  });

  it("BS_BOOK_STORE_004 - Should add a book to the collection", () => {
    BookStore.addBook();
  });

  it("BS_BOOK_STORE_005 - Should add an existing book to the collection", () => {
    BookStore.addExistingBook();
  });

  it("BS_BOOK_STORE_006 - Should return to Book Store", () => {
    BookStore.returnToBookStore();
  });

  after("Clean Up", () => {
    Profile.profileDeleteBook();
  });
});
