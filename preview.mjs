import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('./dist/', import.meta.url));
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.txt':'text/plain; charset=utf-8','.exe':'application/octet-stream'};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(resolve(root) + sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    const content = await readFile(file);
    const headers = {'Content-Type': mime[extname(file)] || 'application/octet-stream','X-Content-Type-Options':'nosniff'};
    if (extname(file) === '.exe') headers['Content-Disposition'] = 'attachment; filename="Q-ZIPS-Setup-1.0.0.exe"';
    res.writeHead(200, headers); res.end(req.method === 'HEAD' ? undefined : content);
  } catch { res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'}); res.end(await readFile(resolve(root, '404.html'))); }
});
server.listen(4187, '127.0.0.1', () => console.log('Q-ZIPS preview: http://127.0.0.1:4187'));

