//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').find({location:'Tramore', name:'Deividas'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch users');
  });

  // db.collection('Todos').find({completed: false}).count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to count Todos in collection');
  // });

// //Find by Object Id
//
//   db.collection('Todos').find({
//     _id: new ObjectID('589764c21a7817ba8be73412')
//   }).toArray().then((docs) => {
//     console.log('Todos by ObjectID');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });
//
// //Find by arguments find(arguments)
// db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//   console.log('Todos By Arguments');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unhable to fetch Todos', err);
// });
//
// // db.collection('Todos').find().toArray().then((docs) => {
// //   console.log('Todos');
// //   console.log(JSON.stringify(docs, undefined, 2));
// // }, (err) => {
// //   console.log('Unable to fetch todos', err);
// // });
//
//   //db.close();
});
