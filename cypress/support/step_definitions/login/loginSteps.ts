import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { LoginPage } from '../../../pageObjects/loginPage';
import { MainPage } from '../../../pageObjects/mainPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();

Given('I open login page', () => {
	cy.fixture('bank.json').then((testData) => {
		cy.visit(testData.url);
	});
});

When(
	'I submit login with {string} and {string}',
	(username: string, password: string) => {
		cy.get('#login_form').within(() => {
			loginPage.loginAs(username, password);
		});
	}
);

Then('I should see homepage', () => {
	mainPage.verifyIfBasicElementsAreDisplayed();
});
