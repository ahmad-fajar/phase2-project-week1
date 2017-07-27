'use strict'

const FB  = require('fb')
const User = require('../models/users')
const jwt = require('jsonwebtoken');

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
      const token = jwt.sign({
        id: response.id,
        name: response.name,
        gender: response.gender,
        link: response.link,
        email: response.email
      }, 'StasXff');

      const data = {
        token: token,
        name: response.name
      }
      res.send(data)
    })
  })
}

function postToFacebook(req,res){
  const accessToken = req.body.token;
  const msg = req.body.pesan;
  FB.setAccessToken(accessToken)
  FB.api('me/feed', 'post', {
    message: msg
  }, function(resp){
    res.send(resp)
  })
}


module.exports = {
  login,
  postToFacebook
};
