const fs = require('fs');
const path = require('path');
const data = JSON.parse(fs.readFileSync(path.join('C:\Users\user\sa_new_car_feed\raw_data\suzuki', 'ertiga_images.json'), 'utf-8'));
data.images.forEach(img => console.log(img.type + ': ' + img.url));
