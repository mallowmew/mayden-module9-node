const express = require('express');
const exphbs = require('express-handlebars');
const port = 8080;

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.listen(port, () => console.log(`Handlebars test listening on ${port}`))

var context = [
  {title:'Gooey', body:'This is Gooey!', image:"images/KSA_Gooey.png"},
  {title:'Slime', body:'This is a good slime!', image:"images/DQ_Slime.png"}
]

app.get('/', (req, res) => {
  res.status(200).render('home', {data: context});
})
