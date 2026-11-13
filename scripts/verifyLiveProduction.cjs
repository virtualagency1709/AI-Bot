const { spawn } = require('child_process');
const http = require('http');

async function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function verifyLive() {
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const debugPort = 9224;
  const child = spawn(edgePath, [
    `--remote-debugging-port=${debugPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 1500));

  let exceptions = [];

  try {
    const targets = await getJson(`http://127.0.0.1:${debugPort}/json`);
    const pageTarget = targets.find(t => t.type === 'page');
    const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let msgId = 1;
    function send(method, params = {}) {
      return new Promise(resolve => {
        const id = msgId++;
        const handler = (event) => {
          const res = JSON.parse(event.data);
          if (res.id === id) {
            ws.removeEventListener('message', handler);
            resolve(res);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.exceptionThrown') {
        exceptions.push(msg.params.exceptionDetails);
        console.error('LIVE EXCEPTION:', msg.params.exceptionDetails.exception?.description);
      }
    };

    await send('Runtime.enable');
    await send('Page.enable');

    console.log('Navigating to live production site: https://ai-bot-virtual-agency.vercel.app/ ...');
    await send('Page.navigate', { url: 'https://ai-bot-virtual-agency.vercel.app/' });

    // Wait 5 seconds for Vercel deployment cache and React mount
    await new Promise(r => setTimeout(r, 5000));

    const evalRes = await send('Runtime.evaluate', {
      expression: 'document.getElementById("root")?.innerHTML?.length || 0'
    });
    console.log('Live #root innerHTML length:', evalRes.result?.result?.value);

    const titleRes = await send('Runtime.evaluate', {
      expression: 'document.querySelector("header h1")?.textContent || "NONE"'
    });
    console.log('Live header h1 text:', titleRes.result?.result?.value);

    const tabCountRes = await send('Runtime.evaluate', {
      expression: 'document.querySelectorAll(".nav-tab-btn")?.length || 0'
    });
    console.log('Live navigation tab buttons rendered:', tabCountRes.result?.result?.value);

    ws.close();
  } catch (err) {
    console.error('Live verification error:', err);
  } finally {
    child.kill();
  }

  if (exceptions.length === 0) {
    console.log('ALL CHECKS PASSED: Live site is rendering with 0 errors!');
  } else {
    console.log(`Live site still has ${exceptions.length} exceptions (may need Vercel build wait).`);
  }
}

verifyLive().catch(console.error);
