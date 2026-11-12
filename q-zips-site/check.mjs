import {readFile, stat} from 'node:fs/promises';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('./dist/', import.meta.url));
let checked=0;
for(const name of ['index.html','privacy.html','credits.html','404.html']) {
  const html=await readFile(resolve(root,name),'utf8');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);
  if(new Set(ids).size!==ids.length) throw new Error(`Duplicate IDs in ${name}`);
  for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url=match[1]; if (/^(https?:|mailto:|data:)/.test(url)) continue;
    const [path,fragment]=url.split('#');
    const target=path?(path.startsWith('/')?resolve(root,'.'+(path==='/'?'/index.html':path)):resolve(dirname(resolve(root,name)),path)):resolve(root,name);
    await stat(target);
    if(fragment){const destination=await readFile(target,'utf8');if(!destination.includes(`id="${fragment}"`)) throw new Error(`Missing anchor ${url}`);}
    checked++;
  }
}
const installer=await readFile(resolve(root,'downloads/Q-ZIPS-Setup-1.0.0.exe'));
const hash=createHash('sha256').update(installer).digest('hex').toUpperCase();
const expected='8CB20645D71C495C36653C7A68C3889C787C22EC17020A09B134A59B7B4DA88E';
if(hash!==expected||installer.length!==1252656)throw new Error('Installer integrity mismatch');
for(const file of ['index.html','downloads/SHA256SUMS.txt'])if(!(await readFile(resolve(root,file),'utf8')).includes(hash))throw new Error('Checksum documentation mismatch');
console.log(`Passed: ${checked} local links/assets/anchors; installer size and SHA-256; checksum consistency; unique page IDs.`);
