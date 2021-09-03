let count = 0;

function increase() {
    count++
}

function getCount() {
    return count;
}

module.exports.increase = increase;//same as exports.increase
module.exports.getCount = getCount;
//exports is a reference value to module so do not use after it is set to a different value like exports = {}
//exports !== module.exports
console.log(module);

// Module {
//     id: '.',
//     path: '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/4-module',
//     exports: { increase: [Function: increase], getCount: [Function: getCount] },
//     parent: null,
//     filename: '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/4-module/counter.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/4-module/node_modules',
//       '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/node_modules',
//       '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/node_modules',
//       '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/node_modules',
//       '/Users/shawnckpark/Desktop/gamjatang/node_modules',
//       '/Users/shawnckpark/Desktop/node_modules',
//       '/Users/shawnckpark/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }
  