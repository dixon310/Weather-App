import { DixWeatherAppPage } from './app.po';

describe('dix-weather-app App', function() {
  let page: DixWeatherAppPage;

  beforeEach(() => {
    page = new DixWeatherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
