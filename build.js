const fs = require('fs');

console.log("Starting application build validation...");

const requiredFiles = [
    'public/index.html',
    'public/style.css',
    'public/script.js',
    'app.js',
    'build.js',
    'package.json'
];

for (const file of requiredFiles) {

    if (!fs.existsSync(file)) {
        console.error(`Build Failed: ${file} not found`);
        process.exit(1);
    }
}

console.log('Application files validated successfully.');
console.log('Build completed successfully.');