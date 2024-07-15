require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js
});
it("Test case # 1 : Verify that user found upon entering the valid data", () => {
    cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
    cy.intercept("GET", "**/*").as('User');
    cy.waitForElementAndPause('.last-segment', 10000); // Wait for 3 seconds after the element appears
    cy.get('.last-segment').should('exist');
    cy.get('.dx-texteditor-input').type('testinguser23@gmail.com');
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > .dx-data-row > .dx-command-edit > .dx-link-delete').click({ multiple: true });
    cy.get('button').as('btn').click(); // Alias the button as 'btn' and click it once
    

});
})