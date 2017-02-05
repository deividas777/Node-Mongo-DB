var mongoose = require('mongoose');

//Promise library
mongoose.Promise = global.Promise;
//Connet db
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {
  mongoose: mongoose
};
