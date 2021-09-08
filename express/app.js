import express from 'express';
const app = express();

app.use(express.json());

app.get('/ski/:id', (req, res, next) => {
    console.log(req.path);
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.query);
    console.log(req.query.keyword);

    res.setHeader('key', 'value');
    res.send('hello');
})
app.listen(8888);
//http://localhost:8888/ski/1/?keyword=gg
// /ski/1/
// { id: '1' }
// 1
// { keyword: 'gg' }
// gg
