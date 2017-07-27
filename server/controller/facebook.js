'use strict'

const FB  = require('fb')
const User = require('../models/users')


function login(req,res){
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken)
  FB.api('/me', {fields: ['id','name','email', 'user_about_me']} ,function(response){
    // User.create({
    //   name: response
    //   username: name
    //   email:
    //   fb_token: accessToken
    // })
    // .then(log=>{
    //   res.send(response)
    // })
    res.send(response)
  })
}


module.exports = {
  login
};
