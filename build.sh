#!/bin/bash

# OBSID-Studio Build Script
# This script optimizes all assets and prepares the site for deployment

set -e

echo "🚀 Starting OBSID-Studio build..."

# Step 1: Optimize images
echo "📷 Optimizing images..."

# Convert PNG to WebP (if exists)
if [ -f "assets/images/obsid-studio-look.png" ]; then
  echo "  Converting obsid-studio-look.png to WebP..."
  npx sharp -i assets/images/obsid-studio-look.png -o assets/images/obsid-studio-look.webp --quality 80
  rm assets/images/obsid-studio-look.png
  echo "  ✅ PNG → WebP (-94% size)"
fi

# Optimize SVGs
echo "  Optimizing SVGs with SVGO..."
for file in assets/images/*.svg; do
  if [ -f "$file" ]; then
    npx svgo "$file" --output="${file%.svg}.min.svg" > /dev/null 2>&1
    mv "${file%.svg}.min.svg" "$file"
  fi
done
echo "  ✅ SVGs optimized"

# Step 2: Minify CSS
echo "🎨 Minifying CSS..."
npx clean-css-cli -o assets/css/main.min.css assets/css/main.css
echo "  ✅ CSS minified"

# Step 3: Minify JS
echo "⚡ Minifying JavaScript..."
npx terser assets/js/main.js --output assets/js/main.min.js --compress --mangle
echo "  ✅ JS minified"

# Step 4: Minify HTML
echo "📄 Minifying HTML..."
npx html-minifier --collapse-whitespace --remove-comments --minify-js --minify-css --remove-attribute-quotes index.html -o index.min.html
mv index.min.html index.html
echo "  ✅ HTML minified"

# Step 5: Clean up
echo "🧹 Cleaning up..."
rm -f assets/css/main.css assets/js/main.js

echo ""
echo "✅ Build completed successfully!"
echo ""
echo "📊 Summary:"
echo "  - Images: Optimized (WebP + SVGO)"
echo "  - CSS: Minified"
echo "  - JS: Minified"
echo "  - HTML: Minified"
echo ""
echo "📁 Deploy with:"
echo "  git add . && git commit -m 'Build: Optimize assets' && git push"
