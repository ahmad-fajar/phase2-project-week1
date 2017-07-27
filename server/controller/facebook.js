'use strict'

const FB  = require('fb')
// const User = require('../models/User')


function login(req,res){
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken)
  FB.api('/me', function(response){
    res.send(response)
  })
}


module.exports = {
  login
};
