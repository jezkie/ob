import { browser, element, by } from 'protractor';

export class OnlineBankingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ob-root h1')).getText();
  }
}
