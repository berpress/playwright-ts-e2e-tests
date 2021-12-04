import { LoginModel, LoginModelFactory } from "../pages/login/model";

export class ApiClient{
  readonly apiContext: any;
  private authData: LoginModel;
  private token: string;

  constructor(apiContext: any) {
    this.apiContext = apiContext;
    this.authData = new LoginModelFactory().create();
  }

  async register(): Promise<void> {
    const register = await this.apiContext.post(`/register`, {
      data: {
        username: this.authData.username,
        password: this.authData.password,
      },
    });
  }

  async auth(): Promise<void> {
    const auth = await this.apiContext.post(`/auth`, {
      data: {
        username: this.authData.username,
        password: this.authData.password,
      },
    });
    const response = await auth.json();
    this.token = response.token;
  }

  getUserData(): LoginModel {
    return this.authData;
  }

  async dispose(): Promise<void> {
    await this.apiContext.dispose();
  }
}