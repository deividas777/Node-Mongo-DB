//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

//findOneAndUpdate

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58962fb9aa9b43214e6eb49b')
}, {
  $set:{
    name: 'Kevin',
  },
  $inc:{
    age: 1
  }
}, {
  returnOriginal: false
}).then((result) =>{
  console.log(JSON.stringify(result, undefined, 2));
});

//db.close();
});
