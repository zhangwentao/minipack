const fs = require('fs');
const path = require('path');
const createAssets = require('./create-assets');
const assetsQueue = [];
let pointer = 0;

function createGraph(entryAsset) {
  assetsQueue.push(entryAsset);
  task();
  return assetsQueue;
}

function task() {
  const asset = assetsQueue[pointer];
  const mapping = {};
  asset.mapping = mapping; 
  const { filename, dependencies } = asset;
  dependencies.forEach( dep => {
    const dirname = path.dirname(filename);
    const realPath = path.resolve(dirname, dep);
    const childAsset = createAssets(realPath);
    mapping[dep] = childAsset.id;
    assetsQueue.push(childAsset)
  });
  pointer+=1;
  if(pointer < assetsQueue.length) {
    task();
  }
}

module.exports = createGraph;