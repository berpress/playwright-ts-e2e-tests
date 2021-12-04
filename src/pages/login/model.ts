import faker from 'faker';

export interface LoginModel {
  readonly username: string;
  readonly password: string;
}

export class LoginModelFactory implements Partial<LoginModel> {
  username?: string;
  password?: string;

  constructor(username?: string, password?: string) {
    this.username = username;
    this.password = password;
  }

  create(): LoginModel {
    const timestamp = Math.floor(new Date().getTime() / 1000);
    const username = this.username || `${timestamp}_${faker.internet.email()}`;
    const password = this.password || faker.internet.password();
    return { username, password };
  }
}
