const fs = require('fs');
const path = require('path');

// Read the actual feed XML and extract image URLs
const xml = fs.readFileSync('public/feeds/suzuki_feed.xml', 'utf-8');
// Simple regex to find all motorpress image URLs
const urls = new Set();
const regex = /https:\/\/suzuki\.motorpress\.co\.za\/images\/[a-f0-9-]+\.jpg\?[^<"]+/g;
let match;
while ((match = regex.exec(xml)) !== null) {
  urls.add(match[0]);
}

console.log('Total unique image URLs: ' + urls.size);
console.log('\nChecking first 20...');

const http = require('https');

async function checkUrl(url) {
  return new Promise((resolve) => {
    const req = http.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url: url.substring(50, 90), status: res.statusCode, type: res.headers['content-type'] });
    });
    req.on('error', (e) => resolve({ url: url.substring(50, 90), status: 'error', type: e.message }));
    req.end();
  });
}

(async () => {
  const urlArr = [...urls].slice(0, 20);
  for (const u of urlArr) {
    const r = await checkUrl(u);
    const ok = r.type && r.type.includes('image') ? 'OK' : 'FAIL';
    console.log(ok + ' ' + r.url + ' => ' + r.type);
  }
})();
