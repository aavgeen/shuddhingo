/**
 * Created by Aavgeen Singh on 5/20/2017.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.models = {};
mongoose.modelSchemas = {};

var helpContributeModel = new Schema({
    issue_name:{
        type:String
    },
    is_validated:{
        type:Boolean,
        default:false
    },
    issue_description:{
        type:String
    },
    raiser_email:{
        type:String
    },
    raiser_contact_number:{
        type:String
    },
    display_pics: {
        type: String //Link to the image url in image server.
    },
    money_required:{
        type:String
    },
    money_raised:{
        type:String,
        default:'0'
    }
})
module.exports = mongoose.model("issues", helpContributeModel);


