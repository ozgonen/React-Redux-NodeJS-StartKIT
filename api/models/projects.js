const   mongoose     = require('mongoose'),
        Schema       = mongoose.Schema;

let ProjectScheme   = new Schema({
    name        : { type : String , unique : true, required : true },
    url         : { type : String , required : true },
    image       : { type : String , required : true }
});

module.exports = mongoose.model('Project', ProjectScheme);
