const { wrapBootstrap } = require('./bootstrap.js')
function createBundle(graph) {
  const innerText = graph.reduce((acc, cur, index) => {
    acc +=
    `
      ${cur.id}: [
        function(require, module, exports) {
          ${cur.code}
        },
        ${JSON.stringify(cur.mapping)}
      ]
    `;
    if (index < graph.length) {
      acc += ',';
    }
    return acc;
  },'');
  return wrapBootstrap(innerText);
}

module.exports = createBundle;