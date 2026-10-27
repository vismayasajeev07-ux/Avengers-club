const fs = require('fs');
const path = require('path');

const Babel = require('./babel.min.js');

console.log('[COMPILER] Babel loaded. Compiling src/bundle.jsx using classic React runtime...');

const jsxSource = fs.readFileSync(path.join(__dirname, 'src', 'bundle.jsx'), 'utf8');

const result = Babel.transform(jsxSource, {
  presets: [
    ['react', { runtime: 'classic' }]
  ],
  compact: false
});

fs.writeFileSync(path.join(__dirname, 'src', 'app.bundle.js'), result.code, 'utf8');

console.log('[SUCCESS] Compiled to src/app.bundle.js with classic runtime! Size:', result.code.length, 'bytes');
