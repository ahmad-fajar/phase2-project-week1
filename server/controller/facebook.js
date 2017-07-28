'use strict'

const FB  = require('fb')
const User = require('../models/users')
const HistoryUser = require('../models/history')
const jwt = require('jsonwebtoken');
require('dotenv').config()

function login(req,res){
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken)
  FB.api('/me', {fields: ['id','name','gender', 'link', 'email']} ,function(response){
    User.create({
      name: response.name,
      username: response.name,
      email: response.email,
      fb_token: accessToken
    })
    .then(log=>{
      console.log(log);
      const token = jwt.sign({
        id: response.id,
        name: response.name,
        gender: response.gender,
        link: response.link,
        email: response.email
      }, process.env.SECRET);

      const data = {
        token: token,
        name: response.name
      }
      res.send(data)
    })
  })
}

function postToFacebook(req,res){
  const tokenUser = req.body.data
  const accessToken = req.body.token;
  const msg = req.body.pesan;
  console.log(tokenUser);
  FB.setAccessToken(accessToken)
  FB.api('me/feed', 'post', {
    message: msg
  }, function(resp){
    jwt.verify(tokenUser, process.env.SECRET, function(err, decoded) {
          HistoryUser.create({
            name: decoded.name,
            date: new Date(),
            search: msg,
            email: decoded.email
          })
          .then(log=>{
            console.log(log);
            res.send(resp)
          })
      })
  })
}


module.exports = {
  login,
  postToFacebook
};
