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
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
};
