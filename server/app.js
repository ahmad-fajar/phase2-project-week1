'use strict'

const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const search = require('./routers/search')
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

app.use(cors());
app.use('/', search);

const facebook = require('./routers/facebook')

app.get('/', function(req,res){
  res.send('hai, project week 1 phase 2')
})

app.use('/facebook', facebook)

app.listen(3000)
