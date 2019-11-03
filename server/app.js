var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

var Cloudant = require('@cloudant/cloudant');
const config = require('./config.js');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/', function (req, res){
    console.log(req.body)
    //var cloudant = Cloudant({usernae: config.user, password: config.password, url: config.url})
    var cloudant = new Cloudant({url: config.url + "/posts", plugins: {iamauth: {iamApiKey: config.password}}});

    var send = null;
    if (req.body.action == "listposts") {
        cloudant.db.list(function(err, body) {
            send = body;
        });
    } else if (req.body.action == "viewpost") {
        cloudant.db.get(req.body.id).then((body) => {
            send = body;
        });
    }
    res.status(200).send(body);
});

app.use(function (err, req, res, next){
    console.log(err)
    res.status(500).send({"error":"error 500!"})
})

var server = app.listen(8900, "0.0.0.0", function(){
    console.log("\nApp listening at http://" + server.address().address + ':' + server.address().port + "\n")
});