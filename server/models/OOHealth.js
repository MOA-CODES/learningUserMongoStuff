const mongoose = require('mongoose');
const { schema } = require('./User');
const Schema = mongoose.Schema;

const OOHealthschema = new schema({
    StudID :{
        type: String
    },
    BloodGroup :{
        type: String
    },
    Genotype :{
        type: String
    },
})

const OOHealth = mongoose.model('OOHealth', OOHealthschema)//in mongodb this schema will be chaged to students

module.exports = OOHealth