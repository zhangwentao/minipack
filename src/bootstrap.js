function bootstrap(modules) {
  function require(id) {
    const [fn, mapping] = modules[id];
    function localRequire(name) {
      return require(mapping[name]);
    }
    const module = {exports:{}};
    fn(localRequire, module, module.exports);
    return module.exports
  }
  require(0);
}

function wrapBootstrap(modlesStr) {
  return `
    (function bootstrap(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(name) {
          return require(mapping[name]);
        }
        const module = {exports:{}};
        fn(localRequire, module, module.exports);
        return module.exports
      }
      require(0);
    })({${modlesStr}});
  `;
}

module.exports = bootstrap;
module.exports.wrapBootstrap = wrapBootstrap;