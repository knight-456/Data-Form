const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "public", "icons");
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// 1x1 pixel transparent PNG
const b64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";
const buffer = Buffer.from(b64, "base64");

fs.writeFileSync(path.join(iconsDir, "icon-192x192.png"), buffer);
fs.writeFileSync(path.join(iconsDir, "icon-512x512.png"), buffer);

console.log("Icons created successfully");
