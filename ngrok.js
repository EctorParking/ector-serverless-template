const ngrok = require('ngrok');

(async function () {
  debugger;
  await ngrok.authtoken('86oNbfPxg2j7anjBvzH6d_r4zbBoe6xuTfiPWPX7x3');
  await ngrok.connect({
    addr: 3000,
    subdomain: 'telegram-ector',
    region: 'eu'
  });

  console.log('Ngrok connected to https://telegram-ector.eu.ngrok.io inspect the tunnel http://127.0.0.1:4040/')
})();
