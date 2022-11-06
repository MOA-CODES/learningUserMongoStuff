const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//role
const roleSchema = new Schema({
    name:{
        type: String
    }
})

const Role = mongoose.model('Role', roleSchema)//in mongodb this schema will be chaged to roles

module.exports = Role