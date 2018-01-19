const mysqladaptor = require("../../../commonopration/sqlopration")
const guid = require("../../../commonopration/guiidgenerator")
var fs = require('fs');
const DBNAME = 'ecommerce'
var redis = require("redis");
client = redis.createClient();
client.on("error",function(error){
    console.log("Redis Error"+error);
})
module.exports.userLogin = function(req,callback){   
    var param = req.body
    var username = param.username
    var password = param.password
    var queryParams = [username,password]
    var query = "select * from user_details where username = ? and password = ?"
    mysqladaptor.executeQueryWithParameters(DBNAME,query,queryParams,function(error,result){
        if(error){
            callback(error)
            return
        }
        if(result){
                var token1 = guid.uuidv4();
                client.set(token,token1)
                callback({"token":res,data:result})
               // client.get(token,function(error,res){
               // console.log(res);
                
               // })
            }
    })
}