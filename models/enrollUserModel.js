/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

var enrollUserModel = new Schema({
    name:{
        type:String
    },
    is_validated:{
        type:Boolean,
        default:false
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
    },
    qualification:{
		type:String
	},
	wantsto:{
		type:String
	},
    address:{
		type:String
	},
	id_card_no:{
		type:String
	},
	interests:{
		type:String
	},
	comments:{
		type:String
	}
	
})
module.exports = mongoose.model("usersEnroll", enrollUserModel);


