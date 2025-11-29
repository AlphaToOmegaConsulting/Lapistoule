
import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

const outputDir = 'screenshots';
const outputPath = path.join(outputDir, 'domaine_cta_debug.png');

async function takeScreenshot() {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    try {
        await page.goto('http://localhost:5173/domaine.html', { waitUntil: 'networkidle' });
        
        // Wait a bit for animations
        await page.waitForTimeout(1000);

        await page.screenshot({ path: outputPath, fullPage: true });
        console.log(`Screenshot saved to ${outputPath}`);
    } catch (e) {
        console.error("Error capturing screenshot:", e);
    } finally {
        await browser.close();
    }
}

takeScreenshot();
