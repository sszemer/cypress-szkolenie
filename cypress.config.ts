import { defineConfig } from 'cypress';
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin =
	require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
	require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

export default defineConfig({
	video: false,
	videoCompression: 33,
	defaultCommandTimeout: 5000,
	chromeWebSecurity: false,
	watchForFileChanges: false,
	viewportWidth: 1280,
	viewportHeight: 720,
	execTimeout: 60000,
	pageLoadTimeout: 60000,
	requestTimeout: 15000,
	responseTimeout: 15000,

	e2e: {
		async setupNodeEvents(on, config) {
			const bundler = createBundler({
				plugins: [createEsbuildPlugin(config)],
			});

			on('file:preprocessor', bundler);
			await addCucumberPreprocessorPlugin(on, config);

			return config;
		},
		specPattern: 'cypress/e2e/features/*.feature',
	},
});
