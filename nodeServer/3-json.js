const http = require('http');
const { O_DSYNC } = require('constants');
const courses = [{name: 'HTML'}, {name:'CSS'}, {name:'JAVASCRIPT'}, {name: 'NODE'}];


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method
    if(url === '/course') {
        if(method === 'GET') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(courses));
        }
    } else if(method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk)
        });
        req.on('end', () => {
            const course = JSON.parse(Buffer.concat(body).toString());
            console.log(course);
            res.writeHead(201);
            res.end();
        })
    }
});

server.listen(9000);