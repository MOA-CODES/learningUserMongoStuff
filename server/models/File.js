const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//role
const FileSchema = new Schema({
    StudID:{
        type: String
    },
    Jamb:{
        type: String
    },
    Passport:{
        type: String
    },
    Transcript:{
        type: String
    },
    Rec_letter:{
        type: String
    },
    P_essay:{
        type: String
    },
})

const File = mongoose.model('File', FileSchema)//in mongodb this schema will be chaged to roles

module.exports = File