const mysqladaptor = require("../../../commonopration/sqlopration")
const DBNAME = 'ecommerce'
module.exports.saveUserDetails = function(req,callback){
    mysqladaptor.executeQuery(DBNAME,'select * from user_details',(error,result)=>{
            console.log(result)
            callback(null,{data:result})

    })
    //console.log(req)
    
    //saveCustomer()
}