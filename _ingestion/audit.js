import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5173';
const OUTPUT_DIR = 'screenshots/audit';
const PAGES = [
    { route: '/', name: '01_accueil' },
    { route: '/domaine.html', name: '02_domaine' },
    { route: '/vins.html', name: '03_vins' },
    { route: '/visites.html', name: '04_visites' },
    { route: '/contact.html', name: '05_contact' }
];

async function captureAll() {
    console.log('🚀 Starting Audit Capture...');
    
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const browser = await chromium.launch();
    const context = await browser.newContext({
        viewport: { width: 1440, height: 900 }
    });
    const page = await context.newPage();

    for (const p of PAGES) {
        const url = `${BASE_URL}${p.route}`;
        console.log(`📸 Capturing ${p.name}...`);
        try {
            await page.goto(url, { waitUntil: 'networkidle' });
            await page.waitForTimeout(2000); // 2s delay for stability
            
            await page.screenshot({ 
                path: path.join(OUTPUT_DIR, `${p.name}.png`),
                fullPage: true 
            });
        } catch (error) {
            console.error(`❌ Error capturing ${p.name}:`, error);
        }
    }

    // Mobile check
    const mobileContext = await browser.newContext({
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1'
    });
    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(BASE_URL, { waitUntil: 'networkidle' });
    await mobilePage.waitForTimeout(2000);
    await mobilePage.screenshot({ 
        path: path.join(OUTPUT_DIR, `01_accueil_mobile.png`),
        fullPage: true 
    });

    await browser.close();
    console.log('✅ Capture complete.');
}

captureAll();
