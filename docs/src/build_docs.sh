#!/usr/bin/env bash
set -e

echo "🚀 Building ខ្មែរចារ (KhmerChar) Documentation in Jaspr..."
cd "$(dirname "$0")"

# Ensure dependencies
dart pub get

# Build Jaspr Static Site
~/.pub-cache/bin/jaspr build -p 9099

# Deploy to docs/
echo "📦 Copying build artifacts to ../..."
cp -r build/jaspr/* ../
rm -f ../docs.js ../khmer_lang_engine.js

# Ensure client script uses relative path so it loads correctly on subpaths (e.g., GitHub Pages)
if [ "$(uname)" = "Darwin" ]; then
  sed -i '' 's|src="/main.client.dart.js"|src="main.client.dart.js"|g' ../index.html
else
  sed -i 's|src="/main.client.dart.js"|src="main.client.dart.js"|g' ../index.html
fi

echo "✅ Documentation successfully built and deployed to docs/!"
