import { AngularDatetimepickerPage } from './app.po';

describe('angular-datetimepicker App', () => {
  let page: AngularDatetimepickerPage;

  beforeEach(() => {
    page = new AngularDatetimepickerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
