const http = require('http');
const pokemon = require('pokemon');
const beaner = require('./module');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 418;
  res.setHeader('Content-Type', 'text/plain');
  res.end(pokemon.random());
});

server.listen(port, hostname, () => {
  console.log('Server started at http://' + hostname + ':' + port + '/');
  console.log(beaner);
});