
var express = require("express");
var app = express();
var _ = require("lodash");
var cors = require("cors");
var bodyParser = require("body-parser");
//var dbProvier = require("postgresadaptor");
var redis = require("redis");
//var nodemailer = require("nodemailer");
var client = redis.createClient();
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(express.static(__dirname+'/../public'));
app.use((req, res, next)=> {
    if(req.originalUrl!="/user/login"){
        client.get(req.headers.token,(error,response)=>{
            if(error){
                console.log(error)
            }else if(response){
                next();
            }else{
                res.json({message:"Invalid Token"});
            }
        })
      //  res.statusCode("403");



    }else{
        console.log('Time:', new Date())
        next()
    }

})
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
console.log(__dirname+'/../public')
var modules = ["user_details"];
_(modules).forEach(function(module) {
    var router = require('./projections/' + module + '/routes/routes.js');
    var provider = require('./projections/' + module + '/dbprovider/' + 'dbprovider' + '.js');
    var repo = require('./projections/' + module + '/repository/repository.js');
    repo.init(provider);
    router.init(app, repo);
});
//
/*
var smtpTransport = nodemailer.createTransport("smtp.gmail.com",{
    service: "Gmail",
    auth: {
        user: "sandeeppatel344@gmail.com",
        pass: "sandeep#pune"
    }
});
    var mailOptions={
        to : "sandeeppatel344@gmail.com",
        subject : "Loyalty Server is Started",
        text : "Welcome in system."
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
*/

//var port = process.env.PORT || 9111;
app.listen(9111, function() {
    console.log("Listening on " + "9111");
});
process.on('uncaughtException', function (err) {
    console.log("UNCAUGHT EXCEPTION" + err);
});