const fs = require('fs');
const zlib = require('zlib'); //compresses file

const readStream = fs.createReadStream('./file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);//connects readStream to writeStream so contents in file.txt goes to file4.txt

piping.on('finish', () => {
    console.log('done!!')
});