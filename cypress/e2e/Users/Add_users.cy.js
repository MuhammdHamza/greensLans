/// <reference types="cypress" />
// Import the Cypress XPath plugin

require('cypress-xpath');

describe('Test suite for login page', () => {
    beforeEach(() => {
        cy.visit('/'); // Replace with the actual URL or path
        cy.login(); // Assuming cy.login() is defined in auth/login.cy.js
    });  
    it("Test case # 1 : Verify that the validations are working fine or not", () => {
        cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
        cy.intercept("GET", "**/*").as('User');
        cy.wait('@User');
        cy.get('.buttons-container > .dx-button-has-text > .dx-button-content > .dx-icon').click({force:true});
        cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content').click({force:true});
    });
    it.only("Test Case # 2 : Verify that the inputs are being inputted",()=>{
        cy.get('[data-item-id="/users"] > .dx-item > .dx-item-content').click({ force: true });
        cy.intercept("GET", "**/*").as('User');
        cy.wait('@User');
        cy.get('.buttons-container > .dx-button-has-text > .dx-button-content').click({force:true});
        cy.get(':nth-child(1) > .popup-group-form-input').should('be.visible').click({force:true}); // email field
        cy.get(':nth-child(1) > .popup-group-form-input').type('testinguser2351@gmail.com');
        cy.get(':nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({force:true}); 
        cy.get(':nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('Pass23'); // password
        cy.get('.dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').should('be.visible').click({force:true});
        cy.wait(200);
        cy.get(':nth-child(1) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({force:true}).type('Admin{enter}');
        cy.wait(200);
        cy.get('[aria-describedby="dx-col-30"] > :nth-child(1) > .dx-datagrid-search-text').should('be.visible').click({force:true});
        cy.wait(200);
        cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content').should('be.visible').click({force:true});
        })
});






