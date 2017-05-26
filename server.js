/**
 * Created by Aavgeen Singh on 5/20/2017.
 */
var express= require('express');

var bodyparser = require('body-parser');

var app = express();

app.set('port',(process.env.PORT || 5005));

app.use(bodyparser.json());

var mongoose = require('mongoose');

var shuddhiRouter = require('./routes/mainRoute');

var db = mongoose.connect("mongodb://localhost/shuddhiDB") // localhost is the server name and uniteDb is the name of the database.
        .then(() => console.log('Connection succesfull'))   //mongoose.connect('mongodb://localhost:27017/demoDb');
        .catch((err) => console.error(err));

app.listen(app.get('port'), function(){
    console.log("Server is Live on port ",app.get('port'));
});

app.use('/shuddhijsonapp', shuddhiRouter);

