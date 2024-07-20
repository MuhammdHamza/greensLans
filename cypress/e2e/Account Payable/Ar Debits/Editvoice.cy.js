/// <reference types="cypress" />
import 'cypress-xpath';

// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js

});

it("Test case # 1 : Verify that the user is able to edit or not ", () => {
cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('[data-item-id="/ardebitnote"] > .dx-item > .dx-item-content > span').click();
cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('.dx-state-selected > .dx-item').click();
cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > .dx-command-edit > .dx-link-edit').click();cy.get(':nth-child(1) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').clear().type('Customer Name');
cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content > .dx-button-text').click();

});

});

