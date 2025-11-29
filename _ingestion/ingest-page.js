import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const TEMPLATE_PATH = path.join(__dirname, '../src/templates/layout.html');
const INPUT_FILE = process.argv[2] || '_new_page.json';

// Read input file
if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Error: Input file '${INPUT_FILE}' not found.`);
    console.log('Usage: node scripts/ingest-page.js [input_json_file]');
    process.exit(1);
}

let pageData;
try {
    const rawData = fs.readFileSync(INPUT_FILE, 'utf8');
    pageData = JSON.parse(rawData);
} catch (error) {
    console.error('Error parsing JSON input:', error.message);
    process.exit(1);
}

// Validate input
const requiredFields = ['slug', 'title', 'description', 'content'];
const missingFields = requiredFields.filter(field => !pageData[field]);

if (missingFields.length > 0) {
    console.error(`Error: Missing required fields in JSON: ${missingFields.join(', ')}`);
    process.exit(1);
}

// Read template
let template;
try {
    template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
} catch (error) {
    console.error(`Error reading template file at ${TEMPLATE_PATH}:`, error.message);
    process.exit(1);
}

// Replace placeholders
let htmlContent = template
    .replace(/<!-- TITLE -->/g, pageData.title)
    .replace(/<!-- DESCRIPTION -->/g, pageData.description)
    .replace(/<!-- SLUG -->/g, pageData.slug)
    .replace(/<!-- CONTENT -->/g, pageData.content);

// Write output file
const outputPath = path.join(__dirname, `../${pageData.slug}.html`);
try {
    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    console.log(`Success! Page generated at: ${outputPath}`);
} catch (error) {
    console.error('Error writing output file:', error.message);
    process.exit(1);
}
