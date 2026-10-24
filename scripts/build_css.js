const fs = require('fs');
const CleanCSS = require('clean-css');

function buildCss() {
  const srcPath = fs.existsSync('css/style.dev.css') ? 'css/style.dev.css' : 'css/style.css';
  const rawCss = fs.readFileSync(srcPath, 'utf8');

  if (!fs.existsSync('css/style.dev.css')) {
    fs.writeFileSync('css/style.dev.css', rawCss, 'utf8');
  }

  const cleanOut = new CleanCSS({
    level: {
      1: { all: true },
      2: {
        all: true,
        mergeMedia: true,
        mergeNonAdjacentRules: true,
        mergeSemantically: true,
        removeDuplicateFontRules: true,
        removeDuplicateMediaBlocks: true,
        removeDuplicateRules: true,
        removeUnusedAtRules: true
      }
    }
  }).minify(rawCss);

  if (cleanOut.errors.length > 0) {
    console.error('CleanCSS errors:', cleanOut.errors);
    process.exit(1);
  }

  fs.writeFileSync('css/style.min.css', cleanOut.styles, 'utf8');
  fs.writeFileSync('css/style.css', cleanOut.styles, 'utf8');
  console.log(`CSS build completed: ${(cleanOut.styles.length / 1024).toFixed(1)} KiB minified.`);
}

if (require.main === module) {
  buildCss();
}

module.exports = buildCss;
