const http = require('http');
const fs = require('fs'); //file system

const server = http.createServer((req, res) => {
    console.log('incoming...');
    console.log(req.headers);
    console.log(req.httpVersion);// 1.1
    console.log(req.method);// GET
    console.log(req.url);// /
    const url = req.url;
    res.setHeader('Content-type', 'text/html');
    if(url === '/') {
        fs.createReadStream('./html/index.html').pipe(res);
    } else if(url === '/course') {
        fs.createReadStream('./html/course.html').pipe(res);
    } else {
        fs.createReadStream('./html/not-found.html').pipe(res);
    }
});

server.listen(8888);