const express = require('express');
//const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs')

var index = require('./routes/index')
var users = require('./routes/users')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.use('/', index);
app.use('/users', users)

app.use((req, res, next)=>{
  var err = new Error('Not Found');
  err.status = 404;
  res.status(err.status).render('err');
})

app.listen(8000, function(){
  console.log("You are listening to port 8000")
})
