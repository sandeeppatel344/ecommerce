const mysqladaptor = require("../../../commonopration/sqlopration")
const DBNAME = 'ecommerce'
module.exports.saveCustomer = function(req,callback){
    mysqladaptor.executeQuery(DBNAME,'select * from user_details',(error,result)=>{
            console.log(result)
    })
    console.log(req)
    callback(null,{data:[]})
    //saveCustomer()
}