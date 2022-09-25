/// <reference types="Cypress" />

describe('My First Cypress tests', () => {
    it('should be true', () => {
        expect(true).to.equal(true);
    });

    it('should fail', () => {
        expect(false).to.equal(true);
    });

    it('should assert numbers', () => {
        expect(7).to.equal(7);
    });

    it.only('should open homepage', () => {
        cy.visit('www.example.com', { timeout: 5000 })
            .url().should('include', 'example')
            .should('match', /ex..ple..../)
            .get('h1').should('be.visible')
            .get('h2').should('not.exist');
    });
});