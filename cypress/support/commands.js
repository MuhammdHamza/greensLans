require('cypress-xpath');

// Define the custom login command
Cypress.Commands.add('login', (company_name,email, password) => {
  cy.get('.one > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type("lee2@greenstem.com.my");
  cy.get('.pass > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type("123")  
  cy.get('.auth-button').click();
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
  
  // Add this custom command to your Cypress commands file (e.g., commands.js)
  Cypress.Commands.add('getToken', () => {
    cy.request({
      method: 'POST',
      url: 'https://greenplus-api.onlinestar.com.my/oauth/token',
      body: {
        // Include necessary body parameters to get the token
        grant_type: 'password',
        username: 'lee2@greenstem.com.my',
        password: '123',
        // Other necessary parameters
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((response) => {
      // Store the token in localStorage
      const token = response.body.access_token;
      cy.window().then((win) => {
        win.localStorage.setItem('tokenKey', token);
      });
    });
  });
  
  Cypress.Commands.add('apiRequestWithToken', (method, url, { tokenKey = 'Authorization', headers = {}, queryParams = {}, body = null } = {}) => {
    // Get the token from localStorage
    cy.window().then((win) => {
      const token = win.localStorage.getItem(tokenKey);
  
      // Assert that the token exists
      // expect(token).to.not.be.null;
  
      // Make the API request
      cy.request({
        method: method,
        url: url,
        headers: {
          Authorization: `${token}`,
          ...headers
        },
        qs: queryParams, // Use the query parameters
        body: body,
        failOnStatusCode: false // Optionally handle failure status codes gracefully
      });
    });
  });

Cypress.Commands.add('calculateForexValues', (item) => {
  let ForexAmount;
  
  if (item.Quantity === null) {
    ForexAmount = item.userForexAmount;
  } else {
    ForexAmount = (item.Quantity * item.UnitPrice) * ((100 - item.ItemDiscount) / 100);
  }

  const ForexTaxAmountOrignal = ForexAmount * (item.TaxRate / 100);
  const ForexTaxAmount = ForexTaxAmountOrignal + item.ForexTaxAdjust;
  const ForexTaxable = ForexAmount;

  return { ForexAmount, ForexTaxAmount, ForexTaxable };
});
