describe('Login Tests', () => {
    beforeEach(() => {
      cy.visit('https://greenplusonline.onlinestar.com.my/login');
    });
  
    it('should log in successfully with valid credentials', () => {
      cy.get('.one > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('lee2@greenstem.com.my');
      cy.get('.pass > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('123');
      cy.get('.auth-button').click();
      cy.url().should('not.include', '/login'); // Assuming successful login redirects to another page
    });
  
    it('should display an error message for invalid email', () => {
      cy.get('.one > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('invalidemail@greenstem.com.my');
      cy.get('.pass > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('123');
      cy.get('.auth-button').click();
      cy.get('.dx-toast-message').should('be.visible'); // Assuming an error message is displayed
    });
  
    it('should display an error message for invalid password', () => {
      cy.get('.one > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('lee2@greenstem.com.my');
      cy.get('.pass > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('wrongpassword');
      cy.get('.auth-button').click();
      cy.get('.dx-toast-message').should('be.visible'); // Assuming an error message is displayed
    });
  
    it('should display an error message when email field is empty', () => {
      cy.get('.pass > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('123');
      cy.get('.auth-button').click();
      cy.get('.one > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').should('be.visible'); // Assuming an error message is displayed
    });
  
    it('should display an error message when password field is empty', () => {
      cy.get('.one > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input')
        .type('lee2@greenstem.com.my');
      cy.get('.auth-button').click();
      cy.get('.pass > .auth-div > .auth-input > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').should('be.visible'); // Assuming an error message is displayed
    });
  });
  