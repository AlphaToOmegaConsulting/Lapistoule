import { chromium } from 'playwright';
import * as fs from 'fs';
import * as path from 'path';

// Configuration
const BASE_URL = 'http://localhost:5173';
const OUTPUT_DIR = 'screenshots/audit';
const PAGES = [
    { route: '/', name: '01_accueil' },
    { route: '/domaine.html', name: '02_domaine' },
    { route: '/vins.html', name: '03_vins' },
    { route: '/oenotourisme.html', name: '04_oenotourisme' },
    { route: '/visites.html', name: '05_visites' },
    { route: '/contact.html', name: '06_contact' }
];

async function captureAll() {
    console.log('🚀 Starting Audit Capture...');
    
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1440, height: 900 } // Desktop standard
    });
    const page = await context.newPage();

    for (const p of PAGES) {
        const url = `${BASE_URL}${p.route}`;
        console.log(`📸 Capturing ${p.name} (${url})...`);
        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            // Small delay to ensure animations/fonts settle
            await page.waitForTimeout(1000); 
            
            await page.screenshot({ 
                path: path.join(OUTPUT_DIR, `${p.name}.png`),
                fullPage: true 
            });
        } catch (error) {
            console.error(`❌ Error capturing ${p.name}:`, error);
        }
    }

    // Mobile capture (Sample - Home)
    const mobileContext = await browser.newContext({
        viewport: { width: 375, height: 667 }, // iPhone SE equivalent
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
    });
    const mobilePage = await mobileContext.newPage();
    console.log(`📱 Capturing Mobile Home...`);
    await mobilePage.goto(BASE_URL, { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(1000);
    await mobilePage.screenshot({ 
        path: path.join(OUTPUT_DIR, `01_accueil_mobile.png`),
        fullPage: true 
    });

    await browser.close();
    console.log('✅ Capture complete.');
}

captureAll();
