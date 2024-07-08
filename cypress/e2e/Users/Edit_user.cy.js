/// <reference types="cypress" />
// Import the Cypress XPath plugin

require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js
});
it("Test case # 1 : Verify that user can edit the username", () => {
cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
cy.intercept("GET", "**/*").as('User');
cy.waitForElementAndPause('.last-segment', 3000); // Wait for 3 seconds after the element appears
cy.get('.last-segment').should('exist');
cy.get('.dx-texteditor-input').type('testinguser23@gmail.com');
cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > .dx-data-row > .dx-command-edit > .dx-link-edit').first().click();
cy.wait(2000);
cy.get(':nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
.clear() // Clear the existing text if necessary
.type('New value'); // Type the new value
// Get the save button and click it
cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content > .dx-button-text')
.click();


});
it("Test case # 1 : Verify that user can edit the username", () => {
    cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
    cy.intercept("GET", "**/*").as('User');
    cy.waitForElementAndPause('.last-segment', 3000); // Wait for 3 seconds after the element appears
    cy.get('.last-segment').should('exist');
    cy.get('.dx-texteditor-input').type('testinguser23@gmail.com');
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > .dx-data-row > .dx-command-edit > .dx-link-edit').first().click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({force:true});
    cy.get(':nth-child(1) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('manager{enter}');


    // Get the save button and click it
    cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content > .dx-button-text')
    .click();
    
    });
})