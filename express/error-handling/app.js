import express from 'express';
import fs from 'fs';
import fsAsync from 'fs/promises';

const app = express();

app.use(express.json());

app.get('/file1', (req, res) => {
  // 1.
  // fs.readFile('/file1.txt', (err, data) => { asynchronous, it is not captured to app.use((error, req, res, next) so error must be done as callback
  //   if (err) {
  //     res.sendStatus(404);
  //   }
  // });

  // 2.
  try {
    const data = fs.readFileSync('/file1.txt'); //sychronous, means it passes to next when it's done
  } catch (error) {
    res.sendStatus(404).send('File not found');
  }
});

app.get('/file2', (req, res) => {
  fsAsync
    .readFile('/file2.txt') //
    .catch((error) => {
      res.sendStatus(404);
    });
});

app.get('/file3', async (req, res) => {
  try {
    const data = await fsAsync.readFile('/file2.txt');
  } catch {
    res.sendStatus(404);
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);