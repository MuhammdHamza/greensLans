/// <reference types="cypress" />
import 'cypress-xpath';

// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js

});

it("Test case : Verify that the user is able to search data", () => {
cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('[data-item-id="/ardebitnote"] > .dx-item > .dx-item-content > span').click();
cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('.dx-state-selected > .dx-item').click();
cy.get('.listing-page-search-box > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('A0001');
cy.wait(3000);
cy.get('.dx-datagrid').should('contain', 'A0001');



});

});

