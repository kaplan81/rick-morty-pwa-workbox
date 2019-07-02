#!/usr/bin/env bash

# Clean the dist folder completely
npm run clean

# Compile Sass
npm run sass

# Copy my own files
npx copyfiles -e "**/*.scss" -e "**/sw-custom.js" -u 1 src/**/**/**/* src/**/**/* src/**/* src/* dist

# Copy and rename node modules
cp node_modules/rickmortyapi/src/index.js dist/scripts
# --> We need to remove the first line of the file that require('axios')...
sed '1d' dist/scripts/index.js > dist/scripts/rickmortyapi.js
# --> and remove the former index.js
rm dist/scripts/index.js
