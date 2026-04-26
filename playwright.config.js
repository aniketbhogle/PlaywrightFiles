// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  // Folder where your test files are stored
  testDir: './tests',

  // Timeout for each test (in ms)
  timeout: 70 * 1000,

  // Reporter: shows results in console
  reporter: 'html',

  // Shared settings for all tests
  use: {
    baseURL: process.env.URL,                 // Base URL for tests
    headless: false,                        // Run browser without UI
    viewport: { width: 1280, height: 720 },// Standard desktop size
    ignoreHTTPSErrors: true,               // Ignore SSL errors
    screenshot: 'only-on-failure',         // Capture screenshot if test fails
    video: 'retain-on-failure',            // Record video if test fails
    trace: 'retain-on-failure',            // Collect trace if test fails
  },

  // Run tests on Chromium only (basic setup)
  projects: [
    {
      name: 'Desktop',
      use: { ...devices ['Desktop Chrome'],viewport: { width: 1280, height: 720 } },
    },
    // {
    //   name: 'Mobile',
    //   use: { ...devices ['Samsung Galaxy S20'],viewport: { width: 360, height: 640 } },
    // },
  ],
});
