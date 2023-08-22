import {
  searchExistingBook,
  searchNonExistingBook,
} from "../helper/credentials";
import {
  booksStoreApp,
  confirmBookDetails,
  confirmAddedBook,
  profilePage,
} from "../helper/url";

import Login from "../pageObject/loginClass";
import Profile from "../pageObject/profileClass";

class BookStore {
  searchExistingBooks() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-2").click();
    cy.get("#searchBox").type(searchExistingBook.existingBook);
    cy.get("#searchBox")
      .invoke("val")
      .then((text) => {
        const inputQuery = text;
        expect(inputQuery).to.eq(searchExistingBook.existingBook);
        cy.get(
          "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper:nth-child(2) div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
        )
          .invoke("text")
          .should("include", inputQuery);
      });
  }

  searchNonExistingBooks() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-2").click();
    cy.get("#searchBox").type(searchNonExistingBook.nonExistingBook);
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper:nth-child(2) div.ReactTable.-striped.-highlight > div.rt-noData"
    )
      .should("be.visible")
      .contains("No rows found");
  }

  bookItemDetails() {
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-2").click();
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper:nth-child(2) div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
    ).click();
    cy.url().should("eq", confirmBookDetails.urlBookDetails);
  }

  addBook() {
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper:nth-child(2) div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
    ).click();
    cy.get("#login").click();
    Login.enterUserName();

    cy.url().should("eq", "https://demoqa.com/books?book=9781449325862");
    cy.get(".text-right > #addNewRecordButton").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Book added to your collection.");
    });
    cy.get(":nth-child(6) > .element-list > .menu-list > #item-3").click();
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.profile-wrapper:nth-child(2) div.ReactTable.-striped.-highlight:nth-child(2) div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
    ).click();
    cy.url().should("include", "/profile?book=9781449325862");
  }

  addExistingBook() {
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper:nth-child(2) div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
    ).click();
    cy.get("#login").click();
    Login.enterUserName();

    cy.url().should("eq", "https://demoqa.com/books?book=9781449325862");
    cy.get(".text-right > #addNewRecordButton").click();
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Book already present in the your collection!");
    });
  }

  returnToBookStore() {
    cy.get(
      "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.books-wrapper:nth-child(2) div.ReactTable.-striped.-highlight div.rt-table div.rt-tbody div.rt-tr-group:nth-child(1) div.rt-tr.-odd div.rt-td:nth-child(2) div.action-buttons span.mr-2 > a:nth-child(1)"
    ).click();
    cy.get("#addNewRecordButton").click();
    cy.url().should("eq", booksStoreApp.urlBooks);
  }
}

export default new BookStore();
