#!/bin/bash

# Assumes called from apvs/database folder with apvs-internal-web/apvs-external-web repos in parent source folder
node drop-schemas-users.js && node create-schemas-users.js
cd ../internal
npm run-script migrations
cd ../external
npm run-script migrations
cd ..

