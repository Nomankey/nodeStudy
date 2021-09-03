console.log("logging...."); //logging....
console.clear(); //clears logs above

//log level
console.log("log"); //log //for developers
console.log("info");//info //for when u want to leave an information
console.log("warn");//warn //waring
console.log("error");//error //ERROR!
//these are printed different in the browser
//warning and errors are used when they are published to the server in the level of seriousity

//assert
console.assert(2 === 3, "not same!"); //Assertion failed: not same!
console.assert(2 === 2, "same!");
//only printed when it is not true!

//print object
const student = {
    name: "nomankey",
    age: 55,
    company: {name: "AC"}
};

console.log(student); //{ name: 'nomankey', age: 55, company: { name: 'AC' } }
console.table(student);
// ┌─────────┬──────┬────────────┐
// │ (index) │ name │   Values   │
// ├─────────┼──────┼────────────┤
// │  name   │      │ 'nomankey' │
// │   age   │      │     55     │
// │ company │ 'AC' │            │
// └─────────┴──────┴────────────┘
console.dir(student, {showHidden: true, colors: false, depth: 0}); //{ name: 'nomankey', age: 55, company: [Object] }
console.dir(student, {showHidden: true, colors: false, depth: 2}); //{ name: 'nomankey', age: 55, company: { name: 'AC' } }

//measuring time
console.time("for loop");
for(let i = 0; i < 10; i++) {
    i++;
}
console.timeEnd("for loop"); //for loop: 0.084ms

//counting
function a() {
    console.count("a function");
}
a(); //a function: 1
a(); //a function: 2

//trace
function f1() {
    f2();
}

function f2() {
    f3();
}

function f3() {
    console.log("f3");
    console.trace();
}

f1();
// Trace
//     at f3 (/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/1-global/app.js:69:13)
//     at f2 (/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/1-global/app.js:64:5)
//     at f1 (/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/1-global/app.js:60:5)
//     at Object.<anonymous> (/Users/shawnckpark/Desktop/gamjatang/nodeStudies/nodeStudy/nodeModules/1-global/app.js:72:1)
//     at Module._compile (internal/modules/cjs/loader.js:1063:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
//     at Module.load (internal/modules/cjs/loader.js:928:32)
//     at Function.Module._load (internal/modules/cjs/loader.js:769:14)
//     at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
//     at internal/main/run_main_module.js:17:47
