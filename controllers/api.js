var express = require('express');
var router = express.Router();
var tables=require('../models/baseTable');
router.post('/save-user',function(req,res){
var name=req.body.name;
var email=req.body.email;
if(name=='')
{
    return res.send({"success":false,"meessage":'Please Provide name'});

}

if(email=='')
{
    return res.send({"success":false,"meessage":'Please Provide email'});

}
var data={'name':name,'email':email};
    tables.userTable.saveUsersList(data,function(err,response){
             if(err==null)
             {
                return res.send({"success":true,"meessage":'updated'})
             }else{
                return res.send({"success":false,"meessage":'something went worng'});
             }
              
    });
   
});
module.exports=router;