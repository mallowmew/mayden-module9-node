const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 8080;

var jsonParser = bodyParser.json();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (req, res) => {
  res.send(`<h1>It\'s that easy!</h1>`);
})

app.get('/slime', (req, res) => {
  //res.send(`<img src="images/DQ_Slime.png" style="display: block; margin: 0 auto; width: 600px;">`);
  res.sendFile(path.join(__dirname + '/public/slime.htm'));
});

app.get('/jellies', (req, res) => {
  let got = req.query;
  console.log(got.name);
  res.status(200).send('Heyy ' + got.name + '~');
})

app.get('/jellies/:name', (req, res) => {
  let got = req.params;
  console.log(got.name);
  res.status(200).send('Hey there ' + got.name);
})

app.post('/jellies', jsonParser, (req, res) => {
  let posted = req.body;
  console.log(posted.name);
  res.status(200).json({
    success: true,
    message: 'You did it!',
    data: posted,
  });
})

app.listen(port, () => console.log(`First express app listening on ${port}`))