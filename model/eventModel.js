const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title : {type:String, required:true},
    description : {type:String, required:true},
    dateTime: {type:Date, default:Date.now},
    createdBy : {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
invites: [ {userID : {type: mongoose.Schema.Types.ObjectId, ref: 'User'}}],
    rsvp : [
     {
        userID : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        status: {type:String, enum:['Attending', 'Maybe']}
     }    
    ]
}); 

module.exports = mongoose.model('Event', eventSchema);    