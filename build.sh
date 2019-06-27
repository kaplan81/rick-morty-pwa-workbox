#!/usr/bin/env bash

# Clean the dist folder completely
npm run clean

# Compile Sass
npm run sass

# First copy my own files
npx copyfiles -e "**/*.scss" -u 1 src/**/**/**/* src/**/**/* src/**/* src/* dist

# Second copy node modules
# Something like this cp node_modules/rickmortyapi/src/index.js dist/scripts
