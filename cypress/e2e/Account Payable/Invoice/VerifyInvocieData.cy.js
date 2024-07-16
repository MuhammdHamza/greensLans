/// <reference types="cypress" />
import 'cypress-xpath';

// Import the Cypress XPath plugin
require('cypress-xpath');

describe('Test suite for login page', () => {
beforeEach(() => {
cy.visit('/'); // Replace with the actual URL or path
cy.login(); // Assuming cy.login() is defined in auth/login.cy.js

});

it('should fetch data from the API with a token', () => {
  cy.get('[data-item-id="16"] > :nth-child(1)').click();
cy.get('[data-item-id="/arsales"] > .dx-item').click();
cy.get('.dx-datagrid-content-fixed > .dx-datagrid-table > tbody > [aria-rowindex="1"] > .dx-command-edit > .dx-link-edit').click();cy.get(':nth-child(1) > :nth-child(2) > .popup-group-form-input > .dx-show-invalid-badge > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').clear().type('Customer Name');
cy.get('#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content > .dx-button-text').click();
  cy.apiRequestWithToken('POST', 'https://greenplus-api.onlinestar.com.my/api/ARSales/save', {
    queryParams: {
      id: '1k9AedcJbwE%253d',
      del: false,
      prevOutAmount: 0,
      
    }
  }).then((response) => {
    // Validate the response
    cy.log(response);
    console.log(response);
    if (response.status === 401) {
      // cy.log('Unauthorized request');
    } else if(response.status=== 200) {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('Parent');
      expect(response.body).to.have.property('Children');
    }
    else{
      console.log("error")
    }
    console.log(response); 
    
       // response.body.data.item.forEach((item) => {
    //   const { ForexAmount, ForexTaxAmount, ForexTaxable } = cy.calculateForexValues(item);

    //   // Validate ForexAmount
    //   if (item.Quantity === null) {
    //     expect(item.ForexAmount).to.eq(item.userForexAmount);
    //   } else {
    //     expect(item.ForexAmount).to.eq(ForexAmount);
    //   }

    //   // Validate ForexTaxAmount
    //   const ForexTaxAmountOrignal = ForexAmount * (item.TaxRate / 100);
    //   const expectedForexTaxAmount = ForexTaxAmountOrignal + item.ForexTaxAdjust;
    //   expect(item.ForexTaxAmount).to.eq(expectedForexTaxAmount);

    //   // Validate ForexTaxable
    //   expect(item.ForexTaxable).to.eq(ForexTaxable);
    // });
    
  //   if (item.Quantity === null) {
  //     expect(item.ForexAmount).to.eq(item.userForexAmount);
  //   } else {
  //     expect(item.ForexAmount).to.eq(ForexAmount);
  //   }

  //   // Validate ForexTaxAmount
  //   const ForexTaxAmountOrignal = ForexAmount * (item.TaxRate / 100);
  //   const expectedForexTaxAmount = ForexTaxAmountOrignal + item.ForexTaxAdjust;
  //   expect(item.ForexTaxAmount).to.eq(expectedForexTaxAmount);

  //   // Validate ForexTaxable
  //   expect(item.ForexTaxable).to.eq(ForexTaxable);
// Iterate through the response data and validate calculations
response.body?.data?.items?.forEach((item) => {
  // Log the item to ensure it is defined
  cy.log('Processing item:', item);
  
  // Call the calculateForexValues command and destructure the results
  const { ForexAmount, ForexTaxAmount, ForexTaxable } = Cypress.Commands.calculateForexValues(item);
  
  // Log the calculated values
  cy.log('Calculated values:', { ForexAmount, ForexTaxAmount, ForexTaxable });
  
  // Validate ForexAmount
  if (item.Quantity === null) {
    expect(item.ForexAmount).to.eq(item.userForexAmount);
  } else {
    expect(item.ForexAmount).to.eq(ForexAmount);
  }
  
  // Validate ForexTaxAmount
  const ForexTaxAmountOrignal = ForexAmount * (item.TaxRate / 100);
  const expectedForexTaxAmount = ForexTaxAmountOrignal + item.ForexTaxAdjust;
  expect(item.ForexTaxAmount).to.eq(expectedForexTaxAmount);
  
  // Validate ForexTaxable
  expect(item.ForexTaxable).to.eq(ForexTaxable);
  })
    });
});

});

