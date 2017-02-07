const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// Todo.findByIdAndRemove('589a0ca4de8054a043225f8e').then((todo) => {
//   console.log(todo);
// });


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'589a0ca4de8054a043225f8e'}).then((todo) => {
  console.log(todo);
});
