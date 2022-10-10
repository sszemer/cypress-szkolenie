const selectors = {
	url: 'http://books.toscrape.com',
	sideCategories: '.side_categories ul li ul li',
};

export class BooksPage {
	openHomePage() {
		return cy.visit(selectors.url).url().should('include', 'books');
	}

	verifyIfBasicElementsAreDisplayed() {
		return cy
			.get(selectors.sideCategories)
			.last()
			.should('be.visible')
			.get(selectors.sideCategories)
			.eq(7)
			.should('be.visible')
			.get(selectors.sideCategories)
			.eq(-7)
			.should('be.visible')
			.get(selectors.sideCategories)
			.first()
			.should('be.visible')
			.and('contain.text', 'Travel')
			.get(selectors.sideCategories)
			.its('length')
			.should('eq', 50);
	}

	openClassics() {
		return cy
			.get(selectors.sideCategories)
			.find('a')
			.contains('Classics')
			.click()
			.reload()
			.get(selectors.sideCategories)
			.find('a')
			.contains('Classics')
			.click();
	}
}
