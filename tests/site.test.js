const fs = require('fs');
const assert = require('assert');

console.log("🔍 Running CI test suite...");

// 1. Verify critical files exist
assert(fs.existsSync('src/index.html'), "❌ Error: src/index.html is missing!");
assert(fs.existsSync('src/style.css'), "❌ Error: src/style.css is missing!");

const html = fs.readFileSync('src/index.html', 'utf8');

// 2. Check required course tabs exist in HTML
const requiredTabs = [
  'PES University',
  'Software Engineering',
  'CI/CD Pipeline',
  'Instructable'
];

requiredTabs.forEach(tabName => {
  assert(
    html.includes(tabName),
    `❌ Test Failed: Mandatory tab "${tabName}" was not found in index.html!`
  );
});

console.log("[PASSED] All static tab content checks passed successfully!");