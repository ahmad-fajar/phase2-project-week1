'use strict'

const express = require('express')
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))


const facebook = require('./routers/facebook')

app.get('/', function(req,res){
  res.send('hai, project week 1 phase 1')
})



app.listen(3000)
