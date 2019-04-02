var express=require('express');
var app = express();
var MultiParser = require('./multiparser');
var config=require('./config/config')
app.use(MultiParser());
var server = require('http').Server(app);
var path=require('path');
app.set('view engine', 'ejs');
process.on('uncaughtException',function(err)
{
    console.log("caught exception : ", err);
});
app.use('/', express.static(path.join(__dirname, '/static/')));
app.use('/',require('./controllers/home'));
app.use('/api',require('./controllers/api'));
process.setMaxListeners(0);
var port=config.port
server.listen(port, async function(){

    /*try{
        console.log(await utility.translateText("bhanu prakash",'en'));
    }catch (e) {
         console.log(e);
    }*/
    // console.log(require('./addon.cc'));
 console.log("started on port Number ",port);
});