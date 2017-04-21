import { PeerjsPage } from './app.po';

describe('peerjs App', () => {
  let page: PeerjsPage;

  beforeEach(() => {
    page = new PeerjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
