/* Valida i18n-work/<idioma>/*.json contra o original (i18n-work/pt) e publica em public/blog-i18n/<idioma>/,
   com um index.json (título e resumo por slug) para listas e cartões. */
import fs from "fs";
const shape = (o) => Array.isArray(o) ? `[${o.map(shape).join(",")}]` : o && typeof o === "object" ? `{${Object.keys(o).map((k) => k + ":" + shape(o[k])).join(",")}}` : typeof o;
let bad = 0;
for (const l of ["en", "es"]) {
  const out = `public/blog-i18n/${l}`;
  fs.mkdirSync(out, { recursive: true });
  const index = {};
  for (const f of fs.readdirSync("i18n-work/pt").filter((f) => f.endsWith(".json") && !f.startsWith("._"))) {
    const src = `i18n-work/${l}/${f}`;
    if (!fs.existsSync(src)) { console.log("falta", l, f); bad++; continue; }
    const a = JSON.parse(fs.readFileSync(`i18n-work/pt/${f}`)), b = JSON.parse(fs.readFileSync(src));
    if (shape(a) !== shape(b)) { console.log("estrutura", l, f); bad++; continue; }
    if (JSON.stringify(b).includes("—")) { console.log("travessão", l, f); bad++; continue; }
    fs.writeFileSync(`${out}/${f}`, JSON.stringify(b));
    index[b.slug] = { title: b.title, description: b.description };
  }
  fs.writeFileSync(`${out}/index.json`, JSON.stringify(index));
  console.log(l, Object.keys(index).length, "artigos");
}
process.exitCode = bad ? 1 : 0;
