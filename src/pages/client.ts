import { Page } from '@playwright/test';
import { BalancePage } from './balance/page';
import { LoginPage } from './login/page';


export class Client {
  readonly page: Page;
  balance: BalancePage;
  login: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.login = new LoginPage(page);
    this.balance = new BalancePage(page);
  }

  openMainPage(url: string) {
    this.page.goto(url);
  }
}
