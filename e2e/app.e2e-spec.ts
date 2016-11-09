import { ReactiveFormPage } from './app.po';

describe('wine-app App', function() {
  let page: ReactiveFormPage;

  beforeEach(() => {
    page = new ReactiveFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
