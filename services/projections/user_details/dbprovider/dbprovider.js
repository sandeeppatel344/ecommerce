const mysqladaptor = require("../../../commonopration/sqlopration")
const formateData = require("../jsondata")
var fs = require('fs');
const DBNAME = 'ecommerce'
module.exports.saveUserDetails = function(req,callback){
   // mysqladaptor.executeQuery(DBNAME,'select * from user_details',(error,result)=>{
     //       console.log(result)
       //     callback(null,{data:result})

    //})
    //console.log(req)
    
    //saveCustomer()
//    console.log(req.body)
     
    var data = formateData.dataFormate(req.body)
    mysqladaptor.insert(DBNAME,data,"user_details",function(error,result){
        if(error){
            callback(error)
            return
        }

        callback({data:{message:"save successfully."}})
    })
}