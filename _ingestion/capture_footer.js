
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // We'll try to access the localhost. If it fails, we might need to rely on static file opening (but modules won't work well).
  // Assuming the user has the server running or I can start it. 
  // Since I couldn't start it easily in background, I will try to connect. 
  // If it fails, I will output a message.
  
  try {
    console.log('Navigating to http://localhost:5173/index.html...');
    await page.goto('http://localhost:5173/index.html', { timeout: 10000 });
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    
    // Wait for footer to be visible
    await page.waitForSelector('footer.main-footer');
    
    // Take screenshot of the footer only
    const footer = await page.$('footer.main-footer');
    if (footer) {
      await footer.screenshot({ path: 'screenshots/footer-detail.png' });
      console.log('Footer screenshot saved to screenshots/footer-detail.png');
    } else {
      console.log('Footer element not found');
    }
    
  } catch (error) {
    console.error('Error connecting or capturing:', error);
  }
  
  await browser.close();
})();
