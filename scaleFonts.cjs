const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content
                .replace(/text-7xl/g, 'TEXT7XL')
                .replace(/text-6xl/g, 'TEXT6XL')
                .replace(/text-5xl/g, 'TEXT5XL')
                .replace(/text-4xl/g, 'TEXT4XL')
                .replace(/text-3xl/g, 'TEXT3XL')
                .replace(/text-2xl/g, 'TEXT2XL');
            
            newContent = newContent
                .replace(/TEXT7XL/g, 'text-6xl')
                .replace(/TEXT6XL/g, 'text-5xl')
                .replace(/TEXT5XL/g, 'text-4xl')
                .replace(/TEXT4XL/g, 'text-3xl')
                .replace(/TEXT3XL/g, 'text-2xl')
                .replace(/TEXT2XL/g, 'text-xl');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir(path.join(__dirname, 'src', 'components'));
console.log('Done');
