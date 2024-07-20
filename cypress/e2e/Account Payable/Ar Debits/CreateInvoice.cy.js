/// <reference types="cypress" />
import 'cypress-xpath';

// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js

});

it("Test case # 1 : Verify that the user is able to create invoice", () => {
cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('[data-item-id="/ardebitnote"] > .dx-item > .dx-item-content > span').click();
cy.get('.buttons-container > .dx-button-has-text > .dx-button-content').click();
cy.get('.popup-form-item-container2 > :nth-child(1) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('INV121345');
cy.get('.popup-group-form-input > .dx-datebox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon').click();
cy.get('[data-value="2024/07/14"] > span').click();
cy.get(':nth-child(3) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('1000');
cy.get(':nth-child(1) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('Customer Name');
cy.wait(3000);
cy.get('.dx-dropdownbox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon').first().click();
cy.get('.customized-lookup-search-container > :nth-child(1) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('abc');
cy.get('[aria-describedby="dx-col-93"]').click();
cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content > .dx-button-text').click();

cy.get('.dx-button-danger > .dx-button-content').click();

});

});

