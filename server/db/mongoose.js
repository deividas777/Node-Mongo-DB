var mongoose = require('mongoose');

//Promise library
mongoose.Promise = global.Promise;
//Connet db
mongoose.connect(process.env.MONGODB_URI);


module.exports = {mongoose};
