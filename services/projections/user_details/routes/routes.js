module.exports.init = function(app,repo){
    var projectrepo = repo;
    app.post("/save/userdetails",function(req,res){
        projectrepo.saveUserDetails(req,function(error,data){
        if(error){
            console.log(error)
            res.json({data:"Error in save customer"});
        }else{
            res.json(data);
        }
        })
    })
}