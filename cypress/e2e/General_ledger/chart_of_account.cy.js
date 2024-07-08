/// <reference types="cypress" />
// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
  beforeEach(() => {
    cy.visit('/'); // Replace with the actual URL or path
    cy.login(); // Assuming cy.login() is defined in auth/login.cy.js
  });

  it("Test case # 1 : Verify that the validations are working fine or not", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('.dx-treelist-content-fixed > .dx-treelist-table > tbody > [aria-rowindex="1"] > .dx-command-edit > span > [aria-label="plus"] > .dx-button-content > .dx-icon').click();
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
    cy.get(':nth-child(3) > .popup-form-item-container1 > :nth-child(1) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
    cy.get(':nth-child(3) > .popup-form-item-container1 > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
    cy.get('.gl-popup-save-btn > .dx-button-content').click();
    cy.wait(30000);
  });

  // it("Test case # 2 : Add Fixed Asset Data", () => {
  //   cy.get('[data-item-id="3"] > .dx-item').click();
  //   cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
  //   cy.get('.dx-treelist-content-fixed > .dx-treelist-table > tbody > [aria-rowindex="1"] > .dx-command-edit > span > [aria-label="plus"] > .dx-button-content > .dx-icon').click();
  //   cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
  //   cy.get(':nth-child(1) > :nth-child(2) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
  //   cy.get(':nth-child(3) > .popup-form-item-container1 > :nth-child(1) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
  //   cy.get(':nth-child(3) > .popup-form-item-container1 > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(' ');
  //   cy.get('.gl-popup-save-btn > .dx-button-content').click();
  // });

  it("Test case # 2 : Verify that the validations are working fine or not", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('.dx-treelist-content-fixed > .dx-treelist-table > tbody > [aria-rowindex="20"] > .dx-command-edit > span > [aria-label="edit"] > .dx-button-content > .dx-icon').click();
    cy.get('.dx-texteditor-input').clear().type(' ');
    cy.get('.gl-popup-save-btn > .dx-button-content').click();
    cy.wait(30000);
  });

  it("Account", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-7-fixed').click();
  });

  it("Code", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-8').click();
  });

  it("Special Code", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-9').click();
  });

  it("Level", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-10').click();
  });

  it("Forex", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-11').click();
  });

  it("Forex", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-12').click();
  });

  it("Forex", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/chartofaccount"] > .dx-item > .dx-item-content > span').click();
    cy.get('#dx-col-11 > .dx-column-indicators > .dx-sort').click();
  });
});
