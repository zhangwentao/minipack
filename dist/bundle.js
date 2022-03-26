
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
    })({
      0: [
        function(require, module, exports) {
          const {test2} = require('./test2.js');
const {doSome } = require('./test.js');
doSome();
test2();
        },
        {"./test2.js":1,"./test.js":2}
      ]
    ,
      1: [
        function(require, module, exports) {
          
function test2() {
  console.log('ok');
}

module.exports = {
  test2
}

        },
        {}
      ]
    ,
      2: [
        function(require, module, exports) {
          const a = require('./a.js');
function doSome() {
  console.log('dosome');
}

module.exports = {
  doSome
}
        },
        {"./a.js":3}
      ]
    ,
      3: [
        function(require, module, exports) {
          alert(1);
        },
        {}
      ]
    ,});
  