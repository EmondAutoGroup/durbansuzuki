const fs = require('fs');
const path = require('path');
const rawDir = 'C:\Users\user\sa_new_car_feed\raw_data\suzuki';
const models = ['jimny', 'grand-vitara', 'fronx', 'swift'];
models.forEach(m => {
  const file = path.join(rawDir, m + '_images.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  console.log('\n=== ' + m.toUpperCase() + ' (' + data.image_count + ' images) ===');
  data.images.forEach((img, i) => {
    console.log('  [' + i + '] ' + img.type + ': ' + img.url.substring(0, 80) + '...');
  });
});
