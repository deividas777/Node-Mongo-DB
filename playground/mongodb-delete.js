//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Users').deleteMany({name: 'Tomas'}).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndDelete({_id: new ObjectID('589787691a7817ba8be7341a')}).then((result)=>{
  console.log(JSON.stringify(result, undefined, 2));
});

// //deleteMany
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
 // db.collection('Todos').deleteOne({text: 'Eat luch'}).then((result) => {
 //   console.log(result);
 // });

// //findOneAndDelete
// db.collection('Todos').findOneAndDelete({text: 'Eat luch'}).then((result) => {
//   console.log(result);
// });
// //   //db.close();
});
