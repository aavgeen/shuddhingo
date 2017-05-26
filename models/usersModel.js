/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

var usersModel = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
	location:{
        type:String,
		default:""
    },
    contact_number:{
        type:String
    }
})
module.exports = mongoose.model("users", usersModel);


