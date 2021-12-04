import { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://berpress.github.io/react-shop/',
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
  },
  reporter: 'html',
};

export default config;
