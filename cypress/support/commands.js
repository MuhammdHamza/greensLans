require('cypress-xpath');

// Define the custom login command
Cypress.Commands.add('login', (company_name,email, password) => {
    cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="email"]').type("lee2@greenstem.com.my");
    cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="text"]').type("greenplus");
    cy.xpath('//div[@class="dx-texteditor-input-container"]//input[@type="password"]').type("123");
    cy.get('.dx-button-content').click();
});
Cypress.Commands.add('selectRandomDropdownOption', (dropdownSelector) => {
    cy.get(dropdownSelector).click(); // Open the dropdown
    cy.get('.dx-list-item').then($options => { // Adjust selector if needed
      const randomIndex = Math.floor(Math.random() * $options.length);
      cy.wrap($options[randomIndex]).click();
    });
  });
  Cypress.Commands.add('waitForElementAndPause', (selector, waitTime = 2000) => {
    cy.get(selector).should('exist').then(() => {
      cy.wait(waitTime);
    });
  });
  