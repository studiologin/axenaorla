import fs from 'node:fs/promises';
import sharp from 'sharp';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#1645bd"/><circle cx="1060" cy="65" r="190" fill="#f3ca55"/><text x="70" y="300" font-size="142" font-family="Arial" font-weight="bold" fill="#f7f3e9">Axé na Orla</text><text x="76" y="390" font-size="42" font-family="Arial" fill="#f3ca55">Salvador em São Paulo</text><text x="76" y="550" font-size="24" font-family="Arial" fill="#ffffff">Projeto cultural em desenvolvimento</text></svg>`;
await sharp(Buffer.from(svg)).jpeg({ quality: 90 }).toFile('public/images/marca/og.jpg');
await sharp('docs/fontes/acaraje-wikimedia.jpg').resize({ width: 1200 }).jpeg({ quality: 86 }).toFile('public/images/gastronomia/acaraje.jpg');
const pkg = JSON.parse(await fs.readFile('package.json', 'utf8'));
for (const group of ['dependencies', 'devDependencies']) for (const name of Object.keys(pkg[group])) {
  pkg[group][name] = JSON.parse(await fs.readFile(`node_modules/${name}/package.json`, 'utf8')).version;
}
await fs.writeFile('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('Imagem social e acarajé preparados; versões fixadas.');
