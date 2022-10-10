import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { BooksPage } from '../../../pageObjects/booksPage';

const booksPage = new BooksPage();

Given('I open books homepage', () => {
	booksPage.openHomePage();
});

When('I see books categories', () => {
	booksPage.verifyIfBasicElementsAreDisplayed();
});

Then('I go to classics', () => {
	booksPage.openClassics();
});
