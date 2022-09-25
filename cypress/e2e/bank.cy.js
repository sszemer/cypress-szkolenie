/// <reference types="Cypress" />

import LoginPage from '../pageObjects/loginPage';
import MainPage from '../pageObjects/mainPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();

describe('Bank tests', () => {
	it('should open homepage', () => {
		cy.fixture('bank.json').then((testData) => {
			cy.visit(testData.url);
			cy.get('#login_form').within(() => {
				loginPage.loginAs(testData.username, testData.password);
			});
			cy.go(-1);
		});
		cy.writeFile('cypress/fixtures/bankNew.json', {
			username: 'notUserName',
		});
	});

	it('should open homepag with xpath', () => {
		cy.fixture('bank.json').then((testData) => {
			cy.visit(testData.url);
			cy.xpath('//*[@id="login_form"]').within(() => {
				cy.get('#user_login').type(testData.username, { delay: 100 });
				cy.get('#user_password').type(testData.password);
				cy.get('[name="submit"]').click();
			});
			cy.go(-1);
		});
	});

	it('login into bank alias', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		cy.get('.offset3 a').focus();
		cy.viewport('samsung-s10');
		cy.viewport(800, 600);
		cy.title().should('include', 'Zero - Log in');
	});
});
