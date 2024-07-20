import { clickExportAndVerifyResponseUrl, searchWithCustomerCode, clickLastElementIn } from '../../../utilities/utility.js';
let ForexAmount, LocalAmount, LocalTaxAdjust;
describe('Tax', () => {
  beforeEach(() => {
    cy.then(() => {
      cy.visit("https://greenplusonline.onlinestar.com.my/home");
     cy.login();
      cy.url().should("include", "/");
    });
  });
  it('Forex', () => {
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({ force: true });
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Account Receivable')").click();
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Invoice')").click();
    searchWithCustomerCode({ code: "Z0015" })
    cy.get('body').then($body => {
      if ($body.find("[class='errorMessage-popup-body']").length > 0) {
        cy.get("[class='errorMessage-popup-body']").should('be.visible').then(() => {
          // cy.get("[class='dx-button-text'] span:contains('Close')").click();
          clickLastElementIn({ locator: "[class='dx-button-text']" })
        });
      } else if ($body.find("[id='submit-link']").prop('disabled')) {
        cy.get("[id='submit-link']").should('be.disabled').then(() => {
          cy.get("[class='dx-button-text'] span:contains('Save')").click();
          clickExportAndVerifyResponseUrl({ locator: '#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content', resToGet: 'save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500', urlToVerify: 'https://greenplus-api.onlinestar.com.my/api/ARSales/save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500' });
          cy.then(() => {
            const networkResponse = Cypress.env('networkRes');
            console.log(networkResponse)
            let quantity = 0;
            let unitPrice = 0;
            let ItemDiscount = 0;

            if (networkResponse && networkResponse.quantity !== undefined) {
              quantity = networkResponse.quantity;
            }
            if (networkResponse && networkResponse.unitPrice !== undefined) {
              unitPrice = networkResponse.unitPrice;
            }
            if (networkResponse && networkResponse.ItemDiscount !== undefined) {
              ItemDiscount = networkResponse.ItemDiscount;
            }
            ForexAmount = (quantity * unitPrice) * ((100 - ItemDiscount) / 100)
            // const ForexAmount = (0 * 0) * ((100 - 0) / 100)
            console.log(ForexAmount)
            return ForexAmount;
          });
        });
      }
    })

  });
  it('Not Tax Inclusive', () => {
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({ force: true });
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Account Receivable')").click();
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Invoice')").click();
    searchWithCustomerCode({ code: "Z0015" })
    cy.get('body').then($body => {
      if ($body.find("[class='errorMessage-popup-body']").length > 0) {
        cy.get("[class='errorMessage-popup-body']").should('be.visible').then(() => {
          // cy.get("[class='dx-button-text'] span:contains('Close')").click();
          clickLastElementIn({ locator: "[class='dx-button-text']" })
        });
      } else if ($body.find("[id='submit-link']").prop('disabled')) {
        cy.get("[id='submit-link']").should('be.disabled').then(() => {
          cy.get("[class='dx-button-text'] span:contains('Save')").click();
          clickExportAndVerifyResponseUrl({ locator: '#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content', resToGet: 'save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500', urlToVerify: 'https://greenplus-api.onlinestar.com.my/api/ARSales/save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500' });
          cy.then(() => {
            const networkResponse = Cypress.env('networkRes');
            console.log(networkResponse)
            const ForexAmount = networkResponse.request.body.Children[0].ForexAmount;
            const TaxRate = networkResponse.request.body.Children[0].TaxRate;
            const ForexTaxable = networkResponse.request.body.Children[0].ForexTaxable;
            const ForexTaxAmountOrignal = ForexAmount * (TaxRate / 100)
            // const ForexTaxAmount = ForexTaxAmountOrignal + ForexTaxAdjust;
            expect(ForexTaxable).to.eq(ForexAmount)
          });
        });
      }
    });
  });
  it('Tax Inclusive', () => {
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({ force: true });
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Account Receivable')").click();
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Invoice')").click();
    searchWithCustomerCode({ code: "Z0015" })
    cy.get('body').then($body => {
      if ($body.find("[class='errorMessage-popup-body']").length > 0) {
        cy.get("[class='errorMessage-popup-body']").should('be.visible').then(() => {
          // cy.get("[class='dx-button-text'] span:contains('Close')").click();
          clickLastElementIn({ locator: "[class='dx-button-text']" })
        });
      } else if ($body.find("[id='submit-link']").prop('disabled')) {
        cy.get("[id='submit-link']").should('be.disabled').then(() => {
          cy.get("[class='dx-button-text'] span:contains('Save')").click();
          clickExportAndVerifyResponseUrl({ locator: '#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content', resToGet: 'save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500', urlToVerify: 'https://greenplus-api.onlinestar.com.my/api/ARSales/save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500' });
          cy.then(() => {
            const networkResponse = Cypress.env('networkRes');
            console.log(networkResponse)
            const ForexAmount = networkResponse.request.body.Children[0].ForexAmount;
            const TaxRate = networkResponse.request.body.Children[0].TaxRate;
            const ForexTaxAdjust = networkResponse.request.body.Children[0].ForexTaxAdjust;

            const ForexTaxAmountOrignal = ([ForexAmount] * [TaxRate]) / (100 + [TaxRate])
            const ForexTaxAmount = ForexTaxAmountOrignal + ForexTaxAdjust;
            const ForexTaxable = ForexAmount - ForexTaxAmount
            const ForexTaxablePlusTax = ForexTaxAmount + ForexTaxable
          });
        });
      }
    })
  });
  it('Local Amount', () => {
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({ force: true });
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Account Receivable')").click();
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Invoice')").click();
    searchWithCustomerCode({ code: "Z0015" })
    cy.get('body').then($body => {
      if ($body.find("[class='errorMessage-popup-body']").length > 0) {
        cy.get("[class='errorMessage-popup-body']").should('be.visible').then(() => {
          // cy.get("[class='dx-button-text'] span:contains('Close')").click();
          clickLastElementIn({ locator: "[class='dx-button-text']" })
        });
      } else if ($body.find("[id='submit-link']").prop('disabled')) {
        cy.get("[id='submit-link']").should('be.disabled').then(() => {
          cy.get("[class='dx-button-text'] span:contains('Save')").click();
          clickExportAndVerifyResponseUrl({ locator: '#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content', resToGet: 'save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500', urlToVerify: 'https://greenplus-api.onlinestar.com.my/api/ARSales/save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500' });
          cy.then(() => {
            const networkResponse = Cypress.env('networkRes');
            console.log(networkResponse)
            let LocalRate = 0;

            if (networkResponse && networkResponse.LocalRate !== undefined) {
              LocalRate = networkResponse.LocalRate;
            }
            LocalAmount = ForexAmount * LocalRate
            console.log(LocalAmount)
            return LocalAmount;
          });
        });
      }
    })
  });
  it('Local Amount (Not Tax Inclusive)', () => {
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({ force: true });
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Account Receivable')").click();
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Invoice')").click();
    searchWithCustomerCode({ code: "Z0015" })
    cy.get('body').then($body => {
      if ($body.find("[class='errorMessage-popup-body']").length > 0) {
        cy.get("[class='errorMessage-popup-body']").should('be.visible').then(() => {
          // cy.get("[class='dx-button-text'] span:contains('Close')").click();
          clickLastElementIn({ locator: "[class='dx-button-text']" })
        });
      } else if ($body.find("[id='submit-link']").prop('disabled')) {
        cy.get("[id='submit-link']").should('be.disabled').then(() => {
          cy.get("[class='dx-button-text'] span:contains('Save')").click();
          clickExportAndVerifyResponseUrl({ locator: '#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content', resToGet: 'save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500', urlToVerify: 'https://greenplus-api.onlinestar.com.my/api/ARSales/save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500' });
          cy.then(() => {
            const networkResponse = Cypress.env('networkRes');
            console.log(networkResponse)
            let LocalRate = 0;
            let TaxRate = 0;

            if (networkResponse && networkResponse.LocalRate !== undefined) {
              LocalRate = networkResponse.LocalRate;
            }
            if (networkResponse && networkResponse.TaxRate !== undefined) {
              TaxRate = networkResponse.TaxRate;
            }
            if (networkResponse && networkResponse.LocalTaxAmount !== undefined) {
              LocalTaxAmount = networkResponse.LocalTaxAmount;
            }
            if (networkResponse && networkResponse.LocalTaxAdjust !== undefined) {
              LocalTaxAdjust = networkResponse.LocalTaxAdjust;
            }
            const LocalTaxAmountOrignal = LocalAmount * TaxRate;
            const LocalTaxAmount = LocalTaxAmountOrignal + LocalTaxAdjust;
            const LocalTaxable = LocalAmount;
            cy.log(LocalTaxable)
          });
        });
      }
    })
  });
  it('Local Amount (Tax Inclusive)', () => {
    cy.wait(3000);
    cy.get('[data-item-id="3"] > .dx-item').should('be.visible').click({ force: true });
    cy.get('[data-item-id="3"] > .dx-item').then($items => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      cy.wrap($items[randomIndex]).click();
    });
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Account Receivable')").click();
    cy.get("[class='dx-item dx-treeview-item'] span:contains('Invoice')").click();
    searchWithCustomerCode({ code: "Z0015" })
    cy.get('body').then($body => {
      if ($body.find("[class='errorMessage-popup-body']").length > 0) {
        cy.get("[class='errorMessage-popup-body']").should('be.visible').then(() => {
          // cy.get("[class='dx-button-text'] span:contains('Close')").click();
          clickLastElementIn({ locator: "[class='dx-button-text']" })
        });
      } else if ($body.find("[id='submit-link']").prop('disabled')) {
        cy.get("[id='submit-link']").should('be.disabled').then(() => {
          cy.get("[class='dx-button-text'] span:contains('Save')").click();
          clickExportAndVerifyResponseUrl({ locator: '#submit-link > .dx-buttongroup > .dx-buttongroup-wrapper > .dx-button-has-text > .dx-button-content', resToGet: 'save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500', urlToVerify: 'https://greenplus-api.onlinestar.com.my/api/ARSales/save?id=02EWe3z2pCY%253d&del=false&prevOutAmount=1500' });
          cy.then(() => {
            const networkResponse = Cypress.env('networkRes');
            console.log(networkResponse)
            let LocalRate = 0;
            let TaxRate = 0;

            if (networkResponse && networkResponse.LocalRate !== undefined) {
              LocalRate = networkResponse.LocalRate;
            }
            if (networkResponse && networkResponse.TaxRate !== undefined) {
              TaxRate = networkResponse.TaxRate;
            }
            if (networkResponse && networkResponse.LocalTaxAmount !== undefined) {
              LocalTaxAmount = networkResponse.LocalTaxAmount;
            }
            if (networkResponse && networkResponse.LocalTaxAdjust !== undefined) {
              LocalTaxAdjust = networkResponse.LocalTaxAdjust;
            }
            if (networkResponse && networkResponse.ForexTaxAdjust !== undefined) {
              ForexTaxAdjust = networkResponse.ForexTaxAdjust;
            }
            const LocalTaxAmountOrignal = ([LocalAmount] * [TaxRate]) / (100 + [TaxRate]);
            const LocalTaxAmount = LocalTaxAmountOrignal + LocalTaxAdjust;
            const LocalTaxable = LocalAmount - LocalTaxAmount;

            LocalTaxAdjust = ForexTaxAdjust * LocalRate;
            const LocalTaxablePlusTax = LocalTaxAmount + LocalTaxable;
            cy.log(LocalTaxablePlusTax)
          });
        });
      }
    })
  });
});

