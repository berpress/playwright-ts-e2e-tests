import { Locator, Page } from '@playwright/test';
import { BalanceModel } from './models';

export class BalancePage {
  readonly page: Page;
  private balancePage: Locator;
  private nameInput: Locator;
  private cardInput: Locator;
  private cardDate: Locator;
  private money: Locator;
  private agreeCheckbox: Locator;
  private buttonSubmit: Locator;

  constructor(page: Page) {
    this.page = page;
    this.balancePage = page.locator('#blance-link');
    this.nameInput = page.locator('#name');
    this.cardInput = page.locator('#card');
    this.cardDate = page.locator('#data-card');
    this.money = page.locator('#data-money');
    this.agreeCheckbox = page.locator('#agree');
    this.buttonSubmit = page.locator('text=Transfer');
  }

  async addBalance(data: BalanceModel): Promise<void> {
    await this.nameInput.fill(data.username);
    await this.cardInput.fill(data.cardNumber);
    await this.cardDate.fill(data.cardDate);
    await this.money.fill(data.money);
    if(data.checkBox) {
      await this.agreeCheckbox.click();
    }
    await this.buttonSubmit.click();
  }

  async openBalancePage(): Promise<void> {
    await this.balancePage.click();
  }
}
