/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

var cashTrashModel = new Schema({
    name:{
        type:String
    },
	type_of_customer:{
        type:String //caller or app.
    },
    contact_number:{
        type:String   //use this and fill the rest manually by operators.
    },
    address:{
        type:String
    },
    trash_detail:{
        type:String
    },
	email:{
        type:String
    },
	location:{
        type:String,
		default:""
    }
})
module.exports = mongoose.model("cashTrash", cashTrashModel);


