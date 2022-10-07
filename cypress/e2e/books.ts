/// <reference types="Cypress" />

describe('Books tests', () => {
    it.only('should open homepage', () => {
        cy.visit('http://books.toscrape.com', { timeout: 5000 })
            .url().should('include', 'books')
            .get('.side_categories ul li ul li').last().should('be.visible')
            .get('.side_categories ul li ul li').eq(7).should('be.visible')
            .get('.side_categories ul li ul li').eq(-7).should('be.visible')
            .get('.side_categories ul li ul li').first().should('be.visible').and('contain.text','Travel')
            .get('.side_categories ul li ul li').its('length').should('eq', 50)
            .get('.side_categories ul li ul li').first().find('a').click()
            .reload()
            .get('.side_categories ul li ul li').find('a').contains('Classics').click();
    });
});