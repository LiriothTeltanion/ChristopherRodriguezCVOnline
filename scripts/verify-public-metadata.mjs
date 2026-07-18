import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE_URL = "https://liriothteltanion.github.io/ChristopherRodriguezCVOnline/";
const SOCIAL_IMAGE_URL = `${SITE_URL}images/christopher-portfolio-social-preview.png`;

const read = (relativePath) => readFileSync(path.join(ROOT, relativePath), "utf8");

function pngDimensions(relativePath) {
  const file = readFileSync(path.join(ROOT, relativePath));
  const signature = file.subarray(0, 8).toString("hex");
  assert.equal(signature, "89504e470d0a1a0a", `${relativePath} must be a PNG`);
  return { width: file.readUInt32BE(16), height: file.readUInt32BE(20), bytes: file.length };
}

const packageJson = JSON.parse(read("package.json"));
const lock = JSON.parse(read("package-lock.json"));
const index = read("index.html");
const compactIndex = index.replace(/\s+/g, " ");
const manifest = JSON.parse(read("public/site.webmanifest"));
const robots = read("public/robots.txt");
const sitemap = read("public/sitemap.xml");
const readme = read("README.md");
const tour = read("public/images/portfolio-tour.svg");

assert.equal(packageJson.version, "1.1.0");
assert.equal(lock.version, "1.1.0");
assert.equal(lock.packages[""].version, "1.1.0");

assert.ok(compactIndex.includes(`<link rel="canonical" href="${SITE_URL}" />`));
assert.ok(compactIndex.includes(`<meta property="og:url" content="${SITE_URL}" />`));
assert.ok(index.includes(SOCIAL_IMAGE_URL));
assert.ok(index.includes('property="og:image:width" content="1280"'));
assert.ok(index.includes('property="og:image:height" content="640"'));
assert.ok(index.includes('name="twitter:image:alt"'));
assert.ok(!index.includes(".example"), "index.html must not contain placeholder domains");

const jsonLdMatch = index.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(jsonLdMatch, "JSON-LD block is required");
const jsonLd = JSON.parse(jsonLdMatch[1]);
assert.equal(jsonLd["@graph"][1].url, SITE_URL);
assert.equal(jsonLd["@graph"][1].image, SOCIAL_IMAGE_URL);

assert.equal(manifest.id, "/ChristopherRodriguezCVOnline/");
assert.equal(manifest.start_url, "/ChristopherRodriguezCVOnline/");
assert.equal(manifest.scope, "/ChristopherRodriguezCVOnline/");
assert.ok(robots.includes(`${SITE_URL}sitemap.xml`));
assert.ok(sitemap.includes(`<loc>${SITE_URL}</loc>`));

for (const image of [
  "public/images/portfolio-desktop.jpg",
  "public/images/portfolio-mobile.jpg",
  "public/images/portfolio-current-teaching.jpg",
]) {
  assert.ok(statSync(path.join(ROOT, image)).size > 20_000, `${image} is unexpectedly small`);
  assert.ok(readme.includes(`./${image}`), `${image} must be documented in README.md`);
}

const social = pngDimensions("public/images/christopher-portfolio-social-preview.png");
assert.deepEqual({ width: social.width, height: social.height }, { width: 1280, height: 640 });
assert.ok(social.bytes < 1_000_000, `social preview must stay below 1 MB; got ${social.bytes}`);

assert.ok(tour.includes("<title"));
assert.ok(tour.includes("<desc"));
assert.ok(tour.includes("prefers-reduced-motion"));
assert.ok(tour.includes("data:image/jpeg;base64,"));
assert.ok(readme.includes("./public/images/portfolio-tour.svg"));
assert.ok(readme.includes('media="(prefers-reduced-motion: reduce)"'));

for (const file of [index, robots, sitemap, readme]) {
  assert.ok(!file.includes("christopher-rodriguez.example"));
  assert.ok(!file.includes("christopherrodriguez.example.com"));
}

console.log(
  `✅ Public metadata and visuals verified · v${packageJson.version} · social preview ${social.width}×${social.height}, ${social.bytes} bytes`,
);
