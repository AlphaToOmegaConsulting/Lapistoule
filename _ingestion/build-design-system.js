import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stylesDir = path.join(__dirname, '../src/styles');
const outputFile = path.join(__dirname, 'design-system.css');

const files = [
    'base.css',
    'layout.css',
    'components.css',
    'header.css',
    'footer.css',
    'pages/home.css',
    'pages/domaine.css',
    'pages/vins.css',
    'pages/oenotourisme.css',
    'pages/contact.css'
];

let content = '/* DESIGN SYSTEM MONOLITH - GENERATED AUTOMATICALLY */\n\n';

files.forEach(file => {
    const filePath = path.join(stylesDir, file);
    if (fs.existsSync(filePath)) {
        console.log(`Reading ${file}...`);
        content += `/* === ${file} === */\n`;
        content += fs.readFileSync(filePath, 'utf8');
        content += '\n\n';
    } else {
        console.warn(`Warning: File ${file} not found.`);
    }
});

fs.writeFileSync(outputFile, content);
console.log(`\nSuccessfully generated ${outputFile}`);
