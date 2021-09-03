//path literally means path of the file
const path = require("path");

console.log(__dirname); // /Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path
console.log(__filename);// /Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path/app.js

console.log(path.sep);// /
console.log(path.delimiter);// :

// basename
console.log(path.basename(__filename)); //app.js
console.log(path.basename(__filename, '.js')); //app

// dirname
console.log(path.dirname(__filename)); // /Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path

// extension
console.log(path.extname(__filename)); // .js

//parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed);
// {
//     root: '/',
//     dir: '/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path',
//     base: 'app.js',
//     ext: '.js',
//     name: 'app'
//   }
console.log(str); // /Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path/app.js

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname)); // isAbsolute? true
console.log('isAbsolute?', path.isAbsolute('../')); // isAbsolute? false

// normalize
console.log(path.normalize('./folder////////sub')); // folder/sub

// join
console.log(__dirname + path.sep + 'image'); // /Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path/image
console.log(path.join(__dirname, 'image')); // /Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/8-path/image
