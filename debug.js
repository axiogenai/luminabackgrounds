const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    console.log(`[PAGE LOG] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  page.on('pageerror', err => {
    console.log(`[PAGE ERROR]: ${err.toString()}`);
  });

  page.on('response', response => {
    if (!response.ok()) {
      console.log(`[NETWORK ERROR] ${response.status()} ${response.url()}`);
    }
  });

  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle0' });
  await browser.close();
})();
