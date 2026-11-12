const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function verify() {
  const htmlRes = await fetch('https://ai-bot-virtual-agency.vercel.app/');
  console.log('Production HTML Status:', htmlRes.status);
  
  const scriptMatch = htmlRes.data.match(/src="(\/assets\/index-[^"]+\.js)"/);
  if (!scriptMatch) {
    console.error('Could not find production JS script bundle in HTML');
    return;
  }
  
  const jsUrl = 'https://ai-bot-virtual-agency.vercel.app' + scriptMatch[1];
  console.log('Fetching JS bundle:', jsUrl);
  const jsRes = await fetch(jsUrl);
  console.log('JS Bundle Status:', jsRes.status, 'Size:', jsRes.data.length, 'bytes');

  console.log('Check 7838056998:', jsRes.data.includes('7838056998'));
  console.log('Check wa.me/917838056998:', jsRes.data.includes('wa.me/917838056998'));
  console.log('Check Pan-India Lead Engine:', jsRes.data.includes('Pan-India Lead Engine'));
  console.log('Check All 36 Indian States:', jsRes.data.includes('36 States'));
  console.log('Check Old double 9191 number:', jsRes.data.includes('91919871155662'));
  console.log('Check 8010044000 number:', jsRes.data.includes('8010044000'));
}

verify().catch(console.error);
