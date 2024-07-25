import 'cypress-iframe'

/*

const login = (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/internet');
    cy.get('body > div.c24-cookie-consent-wrapper > div.c24-cookie-consent-notice > div.c24-cookie-consent-notice-buttons.clearfix > a:nth-child(2)').click()
    cy.get('#c24-header-top > div > div.c24-customer.c24-customer-guest > a > span.c24-customer-hover.c24-header-hover').click()
    cy.get('#root > div > div > div:nth-child(3) > div:nth-child(10) > a').click()
    // cy.get('body > div.c24-cookie-consent-wrapper > div.c24-cookie-consent-notice > div.c24-cookie-consent-notice-buttons.clearfix > a:nth-child(2)').click()
    cy.frameLoaded('#c24-uli-iframe')
    cy.iframe('#c24-uli-iframe').within(() => {
    cy.get('#cl_login').type(username)
    cy.get('#c24-uli-login-btn').should('contain.value','weiter')
    cy.get('#c24-uli-login-btn').click();
    cy.get('#cl_pw_login').type(password)
    cy.wait(1000)
    cy.get('#cl_pw_login').type('{enter}')
    cy.get('a.c24-uli-button-sld.c24-uli-button-sld-later').should('contain.text','später erinnern')
    cy.get('a.c24-uli-button-sld.c24-uli-button-sld-later').click()
  });
});
};

*/

describe('CHECK24 Internet Tarrifs Comparison', () => {

  it('Compare two Internet provider tarrifs', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });
    // Visit the CHECK24 Internet page
    cy.logStep('Launch URL');
    cy.visit('/internet')
    cy.title().should('eq','Internet-Tarife & Internet-Angebote vergleichen & sparen')
    cy.get('body > div.c24-cookie-consent-wrapper > div.c24-cookie-consent-notice > div.c24-cookie-consent-notice-buttons.clearfix > a:nth-child(2)')
      .click()

    cy.logStep('Enter Address');

    cy.get('#tko-start-new-comparison-desktop > form > div.sc-klVQSN.cKRLbw > div.sc-fBWQee.fBSyHj')
      .click()

    cy.get('#zi‌pcit‌y').type('80935 München')
  
    cy.get('#tko-start-new-comparison-desktop > form > div.sc-klVQSN.cKRLbw > div.sc-fBWQee.fBSyHj > div > div.sc-imWZod.eqKEFK > div.sc-imWZod.kRrSMK > ul > li')
      .click()
  
    cy.get('#str‌eet').type('Hainbuchenstr.')
  
    cy.get('#tko-start-new-comparison-desktop > form > div.sc-klVQSN.cKRLbw > div.sc-fBWQee.fBSyHj > div > div.sc-imWZod.eqKEFK > div.sc-imWZod.cBlvvj > div.sc-imWZod.igXPDd > div > ul > li')
      .should('be.visible')
  
    cy.get('#tko-start-new-comparison-desktop > form > div.sc-klVQSN.cKRLbw > div.sc-fBWQee.fBSyHj > div > div.sc-imWZod.eqKEFK > div.sc-imWZod.cBlvvj > div.sc-imWZod.igXPDd > div > ul > li')
      .click()
  
      //enter house number and enter
  
    cy.get('#ho‌use')
      .type('2')
    cy.get('#ho‌use')
      .type('{enter}')
  
      // select contract
  
    cy.get('#selectCustomerType-new')
      .click()
    cy.wait(2000)

    cy.logStep('Click Compare');

    cy.get('#tko-start-new-comparison-desktop > form > div.sc-klVQSN.cKRLbw > button')
      .click()
    cy.get('#c24-content > div.tko-grey-fullsize-background-wrapper > div.tko-resultlist-wrapper > div.tko-result-container > div.tko-resultlist-container > div.tko-tile-container > div > div > div.tko-result-tile.tko-organic-1 > div.tko-result-column-wrapper > div.tko-tariff-info > div.tko-dtc > div > label')
      .should('be.visible')
    cy.wait(2000)

    cy.logStep('Select tarrifs and click compare');

    cy.get('#c24-content > div.tko-grey-fullsize-background-wrapper > div.tko-resultlist-wrapper > div.tko-result-container > div.tko-resultlist-container > div.tko-tile-container > div > div > div')
      .then($tariffs => {
        let tariffCount = $tariffs.length;
        let tarrifIndex = Math.floor(Math.random() * tariffCount) + 1;
        console.log(tarrifIndex)
      //expect($tariffs.length).to.be.greaterThan(5, 'There should be more than 5 tariffs');
      //cy.log('Successfully fetched tariff length');
    cy.get('#c24-content > div.tko-grey-fullsize-background-wrapper > div.tko-resultlist-wrapper > div.tko-result-container > div.tko-resultlist-container > div.tko-tile-container > div > div > div.tko-result-tile.tko-organic-1 > div.tko-result-column-wrapper > div.tko-tariff-info > div.tko-dtc > div > label')
      .click()

    cy.get(`#c24-content > div.tko-grey-fullsize-background-wrapper > div.tko-resultlist-wrapper > div.tko-result-container > div.tko-resultlist-container > div.tko-tile-container > div > div > div.tko-result-tile.tko-organic-${tarrifIndex} > div.tko-result-column-wrapper > div.tko-tariff-info > div.tko-dtc > div > label`)
      .click()
    cy.get('#c24-content > div.tko-dtc-container.open > div > div > div.tko-dtc-controls > a')
      .should('be.visible')
    });

    cy.get('#c24-content > div.tko-dtc-container.open > div > div > div.tko-dtc-controls > a')
      .click()
    cy.get('#c24-content > div > div > table > tbody > tr:nth-child(9) > td > h3')
      .should('contain.text','Telefon')
    cy.wait(2000)
    
  });

  it('Compare two electricity gas provider tarrifs',() => {

    cy.visit('/strom-gas/')
    cy.get('body > div.c24-cookie-consent-wrapper > div.c24-cookie-consent-notice > div.c24-cookie-consent-notice-buttons.clearfix > a:nth-child(2)')
      .click()
    cy.title().should('eq', 'Strom- & Gas-Vergleich bei CHECK24: Jetzt 2.100 € sparen')

    cy.wait(2000)

    //Enter postleitzahl and and click compare button

   cy.get('body > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > section:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3)')
      .click()
    cy.get('body > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > section:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(3)')
      .type('80935')
    cy.get('#cee6cc > div > div > div > div.teaserFormContainer.teaserFormContainer--negativeTop > section:nth-child(2) > div > form > div:nth-child(1) > button')
      .click()
    cy.get('#changeSearch').should('have.text','\n\n            \n            Suche ändern\n\n                            \n            \n            ')
    cy.get('#c24-content > div > div.page__inner > div.page__cnt > div.page__cnt-cnt > div.result.js-result > div.result__items > article:nth-child(1) > div.flex__container.flex__container--direction-column > div > div.flex__item.flex__item--9.flex__container.flex__container--spread-children-vertically.result-row__innerLeft > div.flex__container.result-row__bottom > div.flex__item.flex__item--2.result-row__bottom--firstColumn.flex__container.flex__container--align-children-vertically')
      .should('be.visible')

    cy.wait(2000)

    //Select two tarrifs and click Compare

    cy.get('#c24-content > div > div.page__inner > div.page__cnt > div.page__cnt-cnt > div.result.js-result > div.result__items > article:nth-child(1) > div.flex__container.flex__container--direction-column > div > div.flex__item.flex__item--9.flex__container.flex__container--spread-children-vertically.result-row__innerLeft > div.flex__container.result-row__bottom > div.flex__item.flex__item--2.result-row__bottom--firstColumn.flex__container.flex__container--align-children-vertically > div > label')
      .click()
    cy.get('#c24-content > div > div.page__inner > div.page__cnt > div.page__cnt-cnt > div.result.js-result > div.result__items > article:nth-child(4) > div.flex__container.flex__container--direction-column > div > div.flex__item.flex__item--9.flex__container.flex__container--spread-children-vertically.result-row__innerLeft > div.flex__container.result-row__bottom > div.flex__item.flex__item--2.result-row__bottom--firstColumn.flex__container.flex__container--align-children-vertically > div')
      .click()
    cy.get('#c24-content > div > div.compare-bar.compare-bar--visible > div > div.compare-bar__actions > a')
      .should('be.visible')
    cy.get('#c24-content > div > div.compare-bar.compare-bar--visible > div > div.compare-bar__actions > a')
      .click()

    cy.get('body > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)')
      .should('contain.text','Kundenbewertungen')

      cy.wait(2000)

  })

});