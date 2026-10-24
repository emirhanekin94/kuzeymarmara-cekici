const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'generate_regions.js');
let code = fs.readFileSync(filePath, 'utf8');

// Match all faqs arrays in regions
// Let's inspect where faqs are defined and ensure they are all unique
const match = code.match(/const regions = \[([\s\S]*?)\];\s*\/\*\* HTML Üretim/);
if (match) {
  console.log('Found regions array');
}

// In generate_regions.js, let's customize questions and answers to include reg.name
// Example:
// q: 'Ödeme kredi kartıyla yapılabilir mi?' -> q: \`\${r.name} bölgesinde ödeme kredi kartıyla yapılabilir mi?\`
// a: 'Evet, araç başında mobil POS ile...' -> a: \`Evet, \${r.name} operasyonlarında araç başında mobil POS ile...\`
// Let's do this by updating the questions in the data directly.
