#!/bin/bash

# Change directory to vue-plugin-manager and install dependencies
cd vue-plugin-manager
npm install

# Start the Vue development server
npm run serve &

# Change directory back to the root folder
cd ..

# Change directory to electron-plugin-manager and install dependencies
cd electron-plugin-manager
npm install

# Start the Electron app
npx electron .
