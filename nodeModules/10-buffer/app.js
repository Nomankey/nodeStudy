//Fixed-size chuck of memory
//array of integers, byte of data

//Buffer allows to process data in byte unit

const buffer = Buffer.from("Hi");
console.log(buffer); // <Buffer 48 69> "H" = 49; "i"=69 printed ass unicode
console.log(buffer.length);
console.log(buffer[0]); //72
console.log(buffer[1]); //105
//strings in array are printed in ascii code
console.log(buffer.toString()); //Hi

//create
const buffer2 = Buffer.alloc(2) //makes a buffer with 2 sizes
//function alloc() finds a memory that buffer2 can use and resets it

const buffer3 = Buffer.allocUnsafe(2); //it is faster than alloc() but does not resets any memory
console.log(buffer2); //<Buffer 00 00>
console.log(buffer3); 
//<Buffer 00 00> might not print the same output with buffer2 if the memory is not empty

buffer2[0] = 72; //ascii code
buffer2[1] = 105; //ascii code
buffer2.copy(buffer3);
console.log(buffer2);//<Buffer 48 69> unicode
console.log(buffer2.toString());//Hi
console.log(buffer3.toString());//Hi

//concat
const newBuffer = Buffer.concat([buffer, buffer2, buffer3]);
console.log(newBuffer.toString());//HiHiHi