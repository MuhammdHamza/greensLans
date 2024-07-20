
export const clickExportAndVerifyResponseUrl = ({ locator: downloadBtn, resToGet: responseName, urlToVerify: url }) => {
    const resName = `resName${generateRandomAlphaNumByLength({ lengthOfString: 5 })}`;
    cy.intercept(responseName).as(resName);
  cy.get(downloadBtn).click();
    cy.wait(`@${resName}`, { timeout: Cypress.env('defaultCommandTimeout') }).then((res) => {
      expect(res.response.url).to.equal(url);
      Cypress.env('networkRes', res.response.body);
      cy.log(JSON.stringify(res.response.body));
      console.log(res)
    });
  };

  export const generateRandomAlphaNumByLength = ({ lengthOfString: length }) => {
    return Array.from(Array(length), () =>
      Math.floor(Math.random() * 36).toString(36),
    )
      .join('')
      .toUpperCase();
  };
  
export const clickLastElementIn = ({ locator: locatorField }) => {
  //click last element in crm note section
  cy.get(locatorField).last().click({ force: true });
};
export const clickFirstElementIn = ({ locator: locatorField }) => {
  //click last element in crm note section
  cy.get(locatorField).first().click({ force: true });
};

export const searchWithCustomerCode = ({code: customerCode})=>{
  cy.wait(6000);
  cy.get('.listing-page-search-box > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click();
  cy.get('.listing-page-search-box > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type(customerCode);
  cy.wait(6000);
 clickFirstElementIn({ locator: "[class='dx-link dx-link-edit dx-icon-edit dx-link-icon']" });
}