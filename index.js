  var express = require('express'),
      app = express(),
      meo = require('./lib/index.js'),
      http = require('http'),
      bodyParser = require('body-parser')

  var app = express()

  var port = process.env.PORT || 3000

  // parse application/x-www-form-urlencoded
  //app.use(bodyParser.urlencoded())

  // parse application/json
  app.use(bodyParser.json())

  app.listen(port)
  console.log('Starting')

  console.log('Listening for Command on ' + port)

  app.post("/", function (req, res) {
    console.log(req.body)
    console.log( req.body.secret === process.env.secret)
    console.log(process.env.secret)
    if(req.body.action && req.body.secret === process.env.secret) {

      res.status(200).send('success')
        var conf = {
            "host": req.body.ip,
            "port": 8082,
            "password": '',
            "enpassword": ''
        };

  meo(conf,function(err, api) {
      if (err) { 
        console.log('error: '+ err);
        return console.error(err); 
        api.close();
      }
        console.log('Calling '+req.body.action)

      api.sendKey(req.body.action);
      api.close();
    
  });


    } else {
      console.log('error 500');

      res.status(500).send('Error on parsing command testing ipad development environment')
    }

    console.log('Listening for Command on ' + port)
  })