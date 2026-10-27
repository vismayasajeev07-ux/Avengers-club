const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://github.com/git-for-windows/git/releases/download/v2.56.0.windows.4/MinGit-2.56.0.4-64-bit.zip';
const dest = path.join(__dirname, 'mingit.zip');

console.log('[DOWNLOAD] Fetching MinGit portable from GitHub...');

function download(downloadUrl) {
  https.get(downloadUrl, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('[REDIRECT] Following redirect to:', res.headers.location);
      download(res.headers.location);
      return;
    }

    if (res.statusCode !== 200) {
      console.error('[ERROR] Failed with status:', res.statusCode);
      process.exit(1);
    }

    const total = parseInt(res.headers['content-length'] || '0', 10);
    let downloaded = 0;
    const file = fs.createWriteStream(dest);

    res.on('data', (chunk) => {
      downloaded += chunk.length;
      if (total > 0 && Math.random() < 0.05) {
        const percent = ((downloaded / total) * 100).toFixed(1);
        process.stdout.write(`\r[PROGRESS] ${percent}% (${(downloaded / 1024 / 1024).toFixed(1)} MB / ${(total / 1024 / 1024).toFixed(1)} MB)`);
      }
    });

    res.pipe(file);

    file.on('finish', () => {
      file.close(() => {
        console.log('\n[SUCCESS] Downloaded MinGit to:', dest);
      });
    });
  }).on('error', (err) => {
    console.error('[ERROR]', err.message);
    process.exit(1);
  });
}

download(url);
