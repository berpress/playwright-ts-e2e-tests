import faker from 'faker';

export interface BalanceModel {
  readonly username: string;
  readonly cardNumber: string;
  readonly cardDate: string;
  readonly money: string;
  readonly checkBox: boolean;
}

export class BalanceModelFactory implements Partial<BalanceModel> {
  username?: string;
  cardNumber?: string;
  cardDate?: string;
  money?: string;
  checkBox?: boolean;

  constructor(username?: string, cardNumber?: string, cardDate?: string, money?: string, checkBox?: boolean) {
    this.username = username;
    this.cardNumber = cardNumber;
    this.cardDate = cardDate;
    this.money = money;
    this.checkBox = checkBox;
  }

  create(): BalanceModel {
    const username = this.username || faker.name.findName();;
    const cardNumber = this.cardNumber || '1234123412341234';
    const cardDate = this.cardDate || '20.22';
    const money = this.money || '1000';
    const checkBox = this.checkBox || true;
    return { username, cardNumber, cardDate, money, checkBox };
  }
}
