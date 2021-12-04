import { Locator, Page } from '@playwright/test';
import { LoginModel } from './model';

export class LoginPage {
  readonly page: Page;
  private loginPage: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private buttonSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = page.locator('#login-link');
    this.emailInput = page.locator('#name');
    this.passwordInput = page.locator('#password');
    this.buttonSubmit = page.locator('#register');
  }

  async auth(data: LoginModel, isSubmit = true): Promise<void> {
    await this.emailInput.fill(data.username);
    await this.passwordInput.fill(data.password);
    if (isSubmit) {
      await this.buttonSubmit.click();
    }
  }

  async openLoginPage(): Promise<void> {
    await this.loginPage.click();
  }
}
