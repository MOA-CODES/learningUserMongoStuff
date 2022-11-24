const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//role
const roleSchema = new Schema({
    Role_id:{
        type: String,
        unique: true,
    },
    Title:{
        type: String
    },
    Description:{
        type: String
    }
})

const Role = mongoose.model('Role', roleSchema)//in mongodb this schema will be chaged to roles

module.exports = Role