const http = require('http');
const ejs = require('ejs');

const name = 'nomankey';
const courses = [{name: 'HTML'}, {name:'CSS'}, {name:'JAVASCRIPT'}, {name: 'NODE'}]

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader('Content-type', 'text/html');
    if(url === '/') {
        ejs.renderFile('./template/index.ejs', {name}).then(data => res.end(data));
    } else if(url === '/course') {
        ejs.renderFile('./template/course.ejs', {courses}).then(data => res.end(data));
    } else {
        ejs.renderFile('./template/not-found.ejs', {name}).then(data => res.end(data));
    }
});

server.listen(9000);