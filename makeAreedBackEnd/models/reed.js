var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ReedSchema = new mongoose.Schema({
    job: String,
    favFood: String,
    isCool: String,
})

ReedSchema.plugin(mongoosePaginate)
const Reed = mongoose.model('Reed', ReedSchema)

module.exports = Reed;