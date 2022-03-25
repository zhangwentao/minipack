const createAssets = require('./create-assets.js');
const createGraph = require('./create-graph.js');
function main() {
  const entryAsset = createAssets('/Users/wentao/Lab/mini-pack/test/main.js');
  const graph = createGraph(entryAsset);
  console.log(graph);
}
main();



