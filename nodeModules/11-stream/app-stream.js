const fs = require("fs");

const readStream = fs.createReadStream('./file.txt' ,{
    highWaterMark: 8, //in 8bytes
    encoding: 'utf-8',
});
//highWaterMark specifies total number of bytes

//since stream reads data little by little it's event-based
const data = [];
readStream.on('data', chunk => {
    //console.log(chunk);
    data.push(chunk);
})
// if you want to get the data in the highWaterMark use once instead of on

readStream.on('end', () => {
    console.log(data.join('')); //prints file's text
})

readStream.on('error', error => {
    console.log(error);
});

