import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Capture logs
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));
  
  console.log('Navigating to localhost:5173...');
  try {
      await page.goto('http://localhost:5173', { waitUntil: 'load', timeout: 10000 });
  } catch (e) {
      console.log('Navigation error:', e.message);
  }

  // Wait a bit for JS to execute
  await page.waitForTimeout(2000);

  // Check header content
  const headerContent = await page.innerHTML('#main-header');
  console.log('Header innerHTML length:', headerContent.length);

  await browser.close();
})();