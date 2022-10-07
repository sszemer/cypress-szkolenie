/// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://devexpress.github.io/testcafe/example/');
});

before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

describe('dropdown tests', () => {
    it.only('selects dropdown', () => {
        cy.get('#preferred-interface').select('JavaScript API');
        cy.get('#preferred-interface').contains('JavaScript API');
        cy.screenshot({ capture: "fullPage" });
        cy.screenshot({ capture: "runner" });
        cy.screenshot({ capture: "viewport" });
        cy.get('.main-content .col-2').screenshot();
        cy.get('h1').scrollIntoView();
    });
});