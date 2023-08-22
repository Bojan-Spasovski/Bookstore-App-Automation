import {
  confirmProfileBookDetails,
  booksStoreApp,
  booksStoreAppLogin,
} from "../helper/url";
import {
  searchExistingBook,
  searchNonExistingBook,
  searchProfileExistingBook,
  TemporaryUser,
  testCredentials,
} from "../helper/credentials";
import Login from "../pageObject/loginClass";
import BookStore from "../pageObject/bookStoreClass";
import Register from "../pageObject/registerClass";

class Profile {
  searchProfileBookItems() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get("#searchBox").type(searchProfileExistingBook.ProfileExistingBook);
    cy.get("#searchBox")
      .invoke("val")
      .then((text) => {
        const inputQuery = text;
        expect(inputQuery).to.eq(searchProfileExistingBook.ProfileExistingBook);
        cy.get(
          "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper:nth-child(2) div.ReactTable.-striped.-highlight:nth-child(2) div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
        )
          .invoke("text")
          .should("include", inputQuery);
      });
  }

  returnToBookStore() {
    cy.get("#addNewRecordButton").click();
  }

  searchProfileNonExistingBookItems() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get('[href="/login"]').click();
    Login.enterUserName();
    cy.get("#searchBox").type(searchNonExistingBook.nonExistingBook);
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper:nth-child(2) div.ReactTable.-striped.-highlight:nth-child(2) > div.rt-noData"
    )
      .should("be.visible")
      .contains("No rows found");
  }

  profileBookItemDetails() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get('[href="/login"]').click();
    Login.enterUserName();
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper:nth-child(2) div.ReactTable.-striped.-highlight:nth-child(2) div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
    ).click();
    cy.url().should("include", "/profile?book");
  }

  profileDeleteBook() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get('[href="/login"]').click();
    Login.enterUserName();
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper:nth-child(2) div.ReactTable.-striped.-highlight:nth-child(2) div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(5) div.action-buttons span:nth-child(1) > svg:nth-child(1)"
    ).click();
    cy.get("#closeSmallModal-ok").click();
  }

  profileDeleteAllBooks() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get('[href="/login"]').click();
    Login.enterUserName();
    cy.get(".buttonWrap > .text-right > #submit").click();
    cy.get("#closeSmallModal-ok").click();
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper:nth-child(2) div.ReactTable.-striped.-highlight:nth-child(2) > div.rt-noData"
    )
      .should("be.visible")
      .contains("No rows found");
  }

  profileDeleteUserAccount() {
    cy.get("#login").click();
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get('[href="/login"]').click();
    // Register.open(); // CAPTCHA OBSTRUCTION
    // Register.enterNewValidUser(); // CAPTCHA OBSTRUCTION
    cy.get("#userName").type(TemporaryUser.TempValidUsername);
    cy.get("#password").type(TemporaryUser.TempValidPassword);
    cy.get("#login").click();
    cy.get(".text-center > #submit").click();
    cy.get("#closeSmallModal-ok").click();
    cy.url().should("eq", booksStoreAppLogin.urlLogin);
  }

  profileVisitBookStore() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get('[href="/login"]').click();
    Login.enterUserName();
    cy.get("#gotoStore").click();
    cy.url().should("eq", booksStoreApp.urlBooks);
  }

  profileLogOut() {
    this.profileVisitBookStore();
    cy.get("#submit").click();
    cy.url().should("eq", booksStoreAppLogin.urlLogin);
  }

  profileCheckUser() {
    cy.get("#login").click();
    Login.enterUserName();
    
    cy.get("#userName-value").then((el) => {
      const text = el.text();
      expect(text).to.eq(testCredentials.userName);
    });
  }
}

export default new Profile();
