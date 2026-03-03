const fs = require('fs');
const https = require('https');

const xml = fs.readFileSync('public/feeds/suzuki_feed.xml', 'utf-8');
const urls = new Set();
const regex = /https:\/\/suzuki\.motorpress\.co\.za\/images\/[a-f0-9-]+\.jpg\?[^<"&]+(?:&amp;[^<"]+)?/g;
let match;
while ((match = regex.exec(xml)) !== null) {
  urls.add(match[0].replace(/&amp;/g, '&'));
}

console.log('Total unique URLs: ' + urls.size);

async function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve({ ok: res.headers['content-type'] && res.headers['content-type'].includes('image') });
    });
    req.on('error', () => resolve({ ok: false }));
    req.on('timeout', () => { req.destroy(); resolve({ ok: false }); });
    req.end();
  });
}

(async () => {
  let ok = 0, fail = 0;
  const failures = [];
  const urlArr = [...urls];
  // Check in batches of 5
  for (let i = 0; i < urlArr.length; i += 5) {
    const batch = urlArr.slice(i, i + 5);
    const results = await Promise.all(batch.map(u => checkUrl(u).then(r => ({ url: u, ok: r.ok }))));
    for (const r of results) {
      if (r.ok) ok++;
      else { fail++; failures.push(r.url.match(/images\/([^.]+)/)[1]); }
    }
  }
  console.log('Working: ' + ok + ', Broken: ' + fail);
  if (failures.length > 0) {
    console.log('Broken UUIDs:');
    failures.forEach(f => console.log('  ' + f));
  }
})();
