'use strict'

const FB  = require('fb')
const User = require('../models/users')


function login(req,res){
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken)
  FB.api('/me', {fields: ['id','name','gender', 'link', 'email']} ,function(response){
    console.log(response);
    User.create({
      name: response.name,
      username: response.name,
      email: response.email,
      fb_token: accessToken
    })
    .then(log=>{
      res.send(response)
    })
  })
}

function postToFacebook(req,res){
  const accessToken = req.body.token;
  const msg = req.body.pesan;
  console.log(accessToken);
  console.log(msg);
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
