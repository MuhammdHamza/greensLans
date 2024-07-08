/// <reference types="cypress" />
// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
  beforeEach(() => {
    cy.visit('/'); // Replace with the actual URL or path
    cy.login(); // Assuming cy.login() is defined in auth/login.cy.js
  });

  it("Test case # 1 : Edit Cash Book entry", () => {
    cy.get('[data-item-id="3"] > .dx-item').click();
    cy.get('[data-item-id="/cashbookentry"] > .dx-item').click();
    cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > .dx-command-edit > .dx-link-edit').click();
    cy.get(':nth-child(1) > .popup-group-form-input > .dx-validationgroup > .dx-dropdownbox > .dx-dropdowneditor-input-wrapper > :nth-child(3) > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon').click();
    cy.get('.customized-lookup-btn-section > .dx-widget > .dx-button-content').click({force:true});
    cy.get('.customized-lookup-search-container > :nth-child(1) > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({force:true}).type('A0001').type('{enter}');
    cy.wait(500);
    cy.get('[aria-describedby="dx-col-113"]').should('exist').click({force:true});
    cy.get(':nth-child(1) > .popup-form-item-container2 > :nth-child(2) > .popup-group-form-label').should('exist').click({force:true});
    cy.wait(300); 
    cy.get(':nth-child(2) > .popup-group-form-input > .dx-validationgroup > .dx-dropdownbox > .dx-dropdowneditor-input-wrapper > :nth-child(3) > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon').should('exist').click({force:true})
    cy.wait(300);
    cy.get(':nth-child(2) > .popup-group-form-input > .dx-validationgroup > .dx-dropdownbox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-widget > .dx-button-content > .dx-dropdowneditor-icon').should('be.visible').type('CB').type('{enter}')
    cy.wait(300);
    cy.get('.lookup-selected-highlight > [aria-describedby="dx-col-138"]').should('exist').click({force:true});
    cy.wait(300);
    cy.get(':nth-child(1) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').should('exist').click({force:true});
    cy.wait(150);
    cy.get(':nth-child(1) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').clear();
    cy.wait(150);
    cy.get(':nth-child(1) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('TESTING').type('{enter}');
    cy.wait(150);
    cy.get('#customized-lookup1 > .dx-validationgroup > .dx-dropdownbox > .dx-dropdowneditor-input-wrapper > .dx-dropdowneditor-field-template-wrapper > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').should('exist').click({force:true});
    cy.wait(150);
    cy.get('#customized-lookup1 > .dx-validationgroup > .dx-dropdownbox > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').should('exist').click({force:true});
  });
  });
