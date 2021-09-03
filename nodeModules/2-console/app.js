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
