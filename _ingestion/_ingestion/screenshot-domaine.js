import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';
const outputDir = 'screenshots'; // Changed to 'screenshots'
const outputPath = path.join(outputDir, 'domaine-screenshot.png');
async function takeScreenshot() {
    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const browser = await chromium.launch();
    const page = await browser.newPage();
    // Navigate to the domaine.html page. Assumes Vite dev server is running on port 5173.
    // In a real scenario, you might want to dynamically get the base URL.
    await page.goto('http://localhost:5173/domaine.html');
    // Take a full page screenshot
    await page.screenshot({ path: outputPath, fullPage: true });
    console.log(`Screenshot saved to ${outputPath}`);
    await browser.close();
}
takeScreenshot();
