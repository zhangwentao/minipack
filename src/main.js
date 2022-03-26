const fs = require('fs');
const path = require('path');
const createAssets = require('./create-assets.js');
const createGraph = require('./create-graph.js');
const createBundle = require('./create-bundle.js');
function main() {
  const entryAsset = createAssets('/Users/wentao/Lab/minipack/test/main.js');
  const graph = createGraph(entryAsset);
  // console.log(graph);
  const bundle = createBundle(graph);
  console.log(bundle);
  fs.writeFileSync(path.resolve(__dirname,'../dist/bundle.js'),bundle);
}
main();



