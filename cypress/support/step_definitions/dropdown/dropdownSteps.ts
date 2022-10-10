import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import { DropdownPage } from '../../../pageObjects/dropdownPage';

const dropdownPage = new DropdownPage();

Given('I open dropdown homepage', () => {
	dropdownPage.openHomePage();
});

When('I select a value', () => {
	dropdownPage.selectValue();
});

Then('I see the changed value', () => {
	dropdownPage.checkValue();
});
