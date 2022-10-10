const selectors = {
	accountSummaryTab: '#account_summary_tab',
	searchTextBox: '#searchTerm',
};

export class MainPage {
	verifyIfBasicElementsAreDisplayed() {
		cy.get(selectors.accountSummaryTab).should('be.visible');
		cy.get(selectors.searchTextBox).should('be.visible');
	}
}
