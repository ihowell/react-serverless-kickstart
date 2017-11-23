const rimraf = require('rimraf');
const path = require('path');

const rootPath = path.resolve(__dirname, '..');

rimraf(path.join(rootPath, 'dist'));
