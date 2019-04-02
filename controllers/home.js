var express = require('express');
var router = express.Router();
var tables=require('../models/baseTable');

router.get('/user-list',function(req,res){
   tables.userTable.getUsersList(function(err,response){
        var userList=[];
      if(err==null)
      {
                userList=JSON.parse(JSON.stringify(response));
      }
         console.log(userList);
      text='sample text for render';
    res.render('pages/user-list',{
        users: userList,
        sampleText: text
    });

   })
    
});

router.get('/home',function(req,res){
    res.render('pages/index');

});
module.exports=router;