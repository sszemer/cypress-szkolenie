const selectors = {
	url: 'https://devexpress.github.io/testcafe/example/',
	dropdown: '#preferred-interface',
	col2: '.main-content .col-2',
	header: 'h1',
};

export class DropdownPage {
	openHomePage() {
		return cy.visit(selectors.url);
	}

	selectValue() {
		cy.get(selectors.dropdown).select('JavaScript API');
		cy.get(selectors.col2).screenshot();
		cy.get(selectors.header).scrollIntoView();
	}

	checkValue() {
		cy.get(selectors.dropdown).contains('JavaScript API');
		cy.screenshot({ capture: 'fullPage' });
		cy.screenshot({ capture: 'runner' });
		cy.screenshot({ capture: 'viewport' });
	}
}
