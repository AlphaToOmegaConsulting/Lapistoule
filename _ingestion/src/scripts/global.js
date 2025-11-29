import { createIcons, icons } from 'lucide';
export function initGlobal() {
    // Initialize Lucide icons globally
    createIcons({ icons });
    // Add any other global initializations here
    console.log('Global logic initialized');
}
