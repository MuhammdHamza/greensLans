/// <reference types="cypress" />
// Import the Cypress XPath plugin

require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js
});
it("Test case # 1 : Verify that the no user found upon entering the invalid data", () => {
    cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
    cy.intercept("GET", "**/*").as('User');
    cy.waitForElementAndPause('.last-segment', 30000); // Wait for 3 seconds after the element appears
    cy.get('.last-segment').should('exist');
    cy.get('.dx-texteditor-input').type('xyz');
});
it("Test case # 1 : Verify that user found upon entering the valid data", () => {
    cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
    cy.intercept("GET", "**/*").as('User');
    cy.waitForElementAndPause('.last-segment', 30000); // Wait for 3 seconds after the element appears
    cy.get('.last-segment').should('exist');
    cy.get('.dx-texteditor-input').type('testinguser23@gmail.com');
});
})