function hello() {
    console.log(this);
    console.log(this === global);//true
};

hello();
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
} */}

class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('----- class -----');
        console.log(this); //A { num: 1 }
        console.log(this === global); //false
    }
}

const a = new A(1);
a.memberFunction();

console.log("----- global scope -----");
console.log(this); //{}
console.log(this === module.exports); //true

//what is this?
//the value of this is determined by how a function is called 
// in node.js this is a module.export