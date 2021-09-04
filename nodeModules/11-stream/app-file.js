const fs = require("fs");

const beforeMem = process.memoryUsage().rss; //save the status of memory
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {});
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff); //5005312
  console.log(`Consumed Memory: ${consumed}MB`); //Consumed Memory: 4.7734375MB
});

//reading an entire file like and writing them is not efficient
//instead use stream which read and write little by little