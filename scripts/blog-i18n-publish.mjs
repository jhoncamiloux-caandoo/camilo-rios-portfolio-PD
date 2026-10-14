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

/* Dicionário das cenas: junta i18n-work/ui/<lote>.<idioma>.json em public/blog-i18n/<idioma>/ui.json. */
for (const l of ["en", "es"]) {
  const dict = {};
  if (fs.existsSync("i18n-work/ui"))
    for (const f of fs.readdirSync("i18n-work/ui").filter((f) => f.endsWith(`.${l}.json`) && !f.startsWith("._"))) {
      const d = JSON.parse(fs.readFileSync(`i18n-work/ui/${f}`));
      for (const [k, v] of Object.entries(d)) {
        if (typeof v !== "string" || v.includes("—")) { console.log("ui inválido", l, f, k); bad++; continue; }
        const vars = (s) => (s.match(/\{\w+\}/g) || []).sort().join();
        if (vars(k) !== vars(v)) { console.log("marcadores", l, f, k); bad++; continue; }
        dict[k] = v;
      }
    }
  fs.writeFileSync(`public/blog-i18n/${l}/ui.json`, JSON.stringify(dict));
  console.log(l, "ui", Object.keys(dict).length, "textos");
}
process.exitCode = bad ? 1 : 0;
