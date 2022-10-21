import {defineConfig} from 'cypress';
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import {createEsbuildPlugin} from "@badeball/cypress-cucumber-preprocessor/esbuild";

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');

export default defineConfig({
    retries: {
        runMode: 1,
        openMode: 0,
    },
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
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true,
    },
    e2e: {
        setupNodeEvents,
        specPattern: 'cypress/e2e/features/*.feature',
    },
});

async function setupNodeEvents(
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
    await addCucumberPreprocessorPlugin(on, config);
    on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
    }));

    return config;
}