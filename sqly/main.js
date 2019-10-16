const express = require('express');
const mysql = require('mysql');
const exphbs = require('express-handlebars');
const port = 8080;

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.listen(port, () => console.log(`MySQL test listening on ${port}`))

const connection = mysql.createConnection({
  host: '192.168.20.20',
  user: 'root',
  database: 'games-i-have-played'
});

app.get('/games', (req, res) => {
  connection.connect();

  connection.query('SELECT * FROM `games-i-have-played`;', (error, results, fields) => {
    res.render('home', {data: results});
  });
});