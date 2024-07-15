/// <reference types="cypress" />
import 'cypress-xpath';

// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js

});

it("Test case # 1 : Verify that the validations are working fine or not", () => {
cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('[data-item-id="/arsales"] > .dx-item').click();
cy.get('.listing-page-search-box > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('customer name');
cy.get('dx-datagrid dx-gridbase-container').should('contain', 'customer name');



});

});

