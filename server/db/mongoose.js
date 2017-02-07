var mongoose = require('mongoose');

//Promise library
mongoose.Promise = global.Promise;
//Connet db
mongoose.connect(process.env. MONGODB_URI || 'mongodb://localhost:27017/TodoApp');


module.exports = {
  mongoose: mongoose
};
