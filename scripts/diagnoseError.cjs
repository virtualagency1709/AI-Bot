const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server for dist/
function startStaticServer(port) {
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
  };

  const distDir = path.join(__dirname, '..', 'dist');
  const server = http.createServer((req, res) => {
    let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url);
    if (!fs.existsSync(filePath)) filePath = path.join(distDir, 'index.html');
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(filePath));
  });

  return new Promise(resolve => server.listen(port, () => resolve(server)));
}

async function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

async function main() {
  const localPort = 5174;
  const staticServer = await startStaticServer(localPort);
  console.log(`Static server running on http://127.0.0.1:${localPort}`);

  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
  const debugPort = 9223;
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
  let rootHtml = "";

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
        console.error('CRASH EXCEPTION DETECTED:', msg.params.exceptionDetails.exception?.description);
      }
    };

    await send('Runtime.enable');
    await send('Page.enable');
    await send('DOM.enable');

    console.log(`Navigating to http://127.0.0.1:${localPort}/...`);
    await send('Page.navigate', { url: `http://127.0.0.1:${localPort}/` });

    // Wait 3 seconds for React to mount and render
    await new Promise(r => setTimeout(r, 3000));

    // Evaluate root innerHTML
    const evalRes = await send('Runtime.evaluate', {
      expression: 'document.getElementById("root").innerHTML.length'
    });
    console.log('document.getElementById("root") innerHTML length:', evalRes.result?.result?.value);

    const titleRes = await send('Runtime.evaluate', {
      expression: 'document.querySelector("header h1")?.textContent'
    });
    console.log('Header text rendered in browser DOM:', titleRes.result?.result?.value);

    const waRes = await send('Runtime.evaluate', {
      expression: 'Array.from(document.querySelectorAll("a[href*=\'wa.me\']")).map(a => a.href)'
    });
    console.log('WhatsApp links rendered in DOM:', waRes.result?.result?.value);

    ws.close();
  } catch (err) {
    console.error('Diagnostics error:', err);
  } finally {
    child.kill();
    staticServer.close();
  }

  if (exceptions.length === 0) {
    console.log('SUCCESS: ZERO RUNTIME EXCEPTIONS! React rendered completely!');
  } else {
    console.error(`FAILED: ${exceptions.length} exceptions occurred.`);
    process.exit(1);
  }
}

main().catch(console.error);
