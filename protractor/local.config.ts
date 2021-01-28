import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {  
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0)
    browser.ignoreSynchronization = true;
    reporter();

    const { AwesomeReport } = require('jasmine-awesome-report');
    const config = {
      fullPath: 'reports',
      fileName: 'awesome',
      merge: true
    };

jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
};
