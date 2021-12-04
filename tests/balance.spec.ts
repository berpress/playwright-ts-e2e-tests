import { test, request, expect } from '@playwright/test';

import { ApiClient } from '../src/api/client';
import { API_URL } from '../src/constants';
import { BalanceModelFactory } from '../src/pages/balance/models';
import { Client } from '../src/pages/client';
import { LoginModel } from '../src/pages/login/model';

test.describe.serial('Add balance tests', () => {
  let data: LoginModel;
  let client: ApiClient;
  test.beforeEach(async () => {
    // create user
    const apiContext = await request.newContext({
      baseURL: API_URL,
    });
    client = new ApiClient(apiContext);
    await client.register();
    await client.auth();
    data = client.getUserData();
  });
  test.afterAll(async () => {
    // Dispose all responses.
    await client.dispose();
  });

  test('add balance valid data asset', async ({ page, baseURL }) => {
    const app = new Client(page);
    app.openMainPage(baseURL);
    await app.login.openLoginPage();
    await app.login.auth(data);

    await app.balance.openBalancePage();
    const dataBalance = new BalanceModelFactory().create();
    await app.balance.addBalance(dataBalance);
  });
});
