
var db=require('../db');
var utility = require("../utility/utility");
var tableName='users';
module.exports=
{
getUsersList:function(callback)
    {
        db.connection.getConnection(function(err,connection){
            if(err)
            {
                callback(err,null);
            }
                 connection.query("select * from " + tableName ,function(err,response){
                         connection.release();
                               callback(err,response); 
                 });

        });
    },saveUsersList:function(data,callback)
    {
        db.connection.getConnection(function(err,connection){
            if(err)
            {
                callback(err,null);
            }

            var date = utility.getCurrentDate();
            data.created_at = date;
            data.updated_at = date;

            
            var query = "INSERT INTO " + tableName + " SET ?";
                 connection.query(query,data,function(err,response){
                    console.log(this.query,response);
                         connection.release();
                            
                               callback(err,response); 
                 });

        });
    }
}