import Page from '../view/viewPage';

class App {
  page: Page;

  constructor() {
    this.page = new Page();
  }

  unloadPage(): void {
    this.page.viewPage();
  }

  workPage(): void {
    this.page.workPage();
  }
}

export default App;
