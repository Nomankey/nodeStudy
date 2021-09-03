console.log(global);
// //<ref *1> Object [global] {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//     }
//   }

global.hello = () => {
    console.log("hello");
}
global.hello(); // hello
hello(); //hello
//in a browser, window is the global object
// but in node global is the global object

