import { OnlineBankingPage } from './app.po';

describe('online-banking App', () => {
  let page: OnlineBankingPage;

  beforeEach(() => {
    page = new OnlineBankingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ob works!');
  });
});
