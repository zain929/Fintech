import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://magwitch.qa.loginstage.com/login',
    viewportHeight: 1080,
    viewportWidth: 1920,
    pageLoadTimeout: 220000,
    defaultCommandTimeout: 10000,
    requestTimeout: 60000,
    execTimeout: 60000,
    numTestsKeptInMemory: 4,
    experimentalMemoryManagement: true,
    env: {
      userId: 'qa+automation@gmail.com',
      password: 'Qwe123$$',
      baseApiUrl: 'https://qa-api.loginstage.com/api'
      ,
    },
  },
});
