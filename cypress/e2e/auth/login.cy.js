{{{/// <reference types="cypress" />

// Import the Cypress XPath plugin
require('cypress-xpath');

// Test suite
describe('Test suite for login page', () => {
  beforeEach(() => {
    cy.visit('/'); // Replace with the actual URL or path
  });

  // Test case 1: Valid login credentials
  const login = async (company_name,email, password) => {

  it.only("should log in with valid credentials", () => {
    cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type(email);
    cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type(company_name);
    cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type(password);
    cy.get('.dx-button-content').click();
    cy.url().should("include", "/");
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({force:true});
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    // Add assertions to verify successful login
     // Adjust the URL to match your application's dashboard or landing page after login
  });
}
login("greenplus","lee2@greenstem.com.my", "123");

  // Test case 2: InValid login credentials

const invalidCreds = async (company_name,email, password) => {

    it("should display an error message for invalid credentials", () => {
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type(email);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type(company_name);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type(password);
      cy.get('.dx-button-content').click();
      cy.url().should("include", "/");
      cy.wait(3000);
  
      // Add assertions to verify successful login
       // Adjust the URL to match your application's dashboard or landing page after login
    });
  }
  invalidCreds("greenplus","lee2@xxxxxx.com.my", "123");

// Test case 3: Verify email validation

  const emailValidation = async (company_name,email, password) => {

    it("should display an error message for empty email field", () => {
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type(email);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type(company_name);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type(password);
      cy.get('.dx-button-content').click();
      cy.url().should("include", "/");
      cy.wait(3000);
  
      // Add assertions to verify successful login
       // Adjust the URL to match your application's dashboard or landing page after login
    });
  }
  emailValidation("greenplus"," ", "123");
  
  // Test case 4: Verify company name validaiton 

  const compnay_name_validation = async (company_name,email, password) => {

    it("hould display an error message for empty company name  field", () => {
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type(email);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type(company_name);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type(password);
      cy.get('.dx-button-content').click();
      cy.url().should("include", "/");
      cy.wait(3000);
  
      // Add assertions to verify successful login
       // Adjust the URL to match your application's dashboard or landing page after login
    });
  }
  compnay_name_validation(" "," lee2@greenstem.com.my", "123");
  
// Test case 5: Verify password validaiton 

  const password_validation = async (company_name,email, password) => {

    it("hould display an error message for empty company name  field", () => {
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type(email);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type(company_name);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type(password);
      cy.get('.dx-button-content').click();
      cy.url().should("include", "/");
      cy.wait(3000);
  
      // Add assertions to verify successful login
       // Adjust the URL to match your application's dashboard or landing page after login
    });
  }
  password_validation("greenplus "," lee2@greenstem.com.my", " ");
  const empty_fields = async (company_name,email, password) => {

    it("hould display an error message for all empty field", () => {
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type(email);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type(company_name);
      cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type(password);
      cy.get('.dx-button-content').click();
      cy.url().should("include", "/");
      cy.wait(3000);
  
      // Add assertions to verify successful login
       // Adjust the URL to match your application's dashboard or landing page after login
    });
  }
  empty_fields(" "," ", " ");
});}}}