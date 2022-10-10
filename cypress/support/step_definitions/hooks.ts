import { Before } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
	cy.log('before all');
});

Before({ tags: '@books' }, () => {
	cy.log('before books');
});
