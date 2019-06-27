#!/usr/bin/env bash

# Clean the dist folder completely
npm run clean

# Compile Sass
npm run sass

# Copy my own files
npx copyfiles -e "**/*.scss" -u 1 src/**/**/**/* src/**/**/* src/**/* src/* dist

# Copy node modules
cp node_modules/rickmortyapi/src/index.js dist/scripts

# Rename rickmortyapi index.js
mv dist/scripts/index.js dist/scripts/rickmortyapi.js
