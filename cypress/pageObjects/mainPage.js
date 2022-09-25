const selectors = {
	accountSummaryTab: '#account_summary_Tab',
	searchTextBox: '#searchTerm',
};

class MainPage {
	verifyIfBasicElementsAreDisplayed() {
		cy.get(selectors.accountSummaryTab).should('be.visible');
		cy.get(selectors.searchTextBox).should('be.visible');
	}
}

export default MainPage;
