const fs = require('fs');
const path = require('path');
const esprima = require('esprima');
const { resolve } = require('path');
const { rejects } = require('assert');

let id = 0;

function createAssetsPacket(filename, id, code) {
  const tokens = esprima.tokenize(code);
  const deps = [];
  tokens.forEach( ({type, value}, index) =>  {
    if(type === 'Identifier' && value === 'require') {
      const path = tokens[index+2].value.replace(/'/g,'');
      deps.push(path);
    }
  });
  return {
    id,
    filename,
    code,
    dependencies: deps 
  }
}

function createAssets(filePath) {
  const data = fs.readFileSync(filePath, {
    encoding: 'utf-8'
  });
  const test = createAssetsPacket(filePath,id,data);
  id+=1;
  return test;
}

module.exports = createAssets;