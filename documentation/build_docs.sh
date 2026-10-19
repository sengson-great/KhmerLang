#!/usr/bin/env bash
set -e

echo "🚀 Building KhmerLang Documentation in Jaspr..."
cd "$(dirname "$0")"

# Ensure dependencies
dart pub get

# Build Jaspr Static Site
~/.pub-cache/bin/jaspr build -p 9099

# Deploy to docs/
echo "📦 Copying build artifacts to ../docs/..."
mkdir -p ../docs
cp -r build/jaspr/* ../docs/
rm -f ../docs/docs.js ../docs/khmer_lang_engine.js

echo "✅ Documentation successfully built and deployed to docs/!"
