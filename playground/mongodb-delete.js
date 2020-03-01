//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb')
//var obj = new ObjectId();
//console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log(err);
        return console.log('unable to connect to mongodb');
		
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
 
    //deleteMany
    // db.collection('Todos').deleteMany({ text: "eat lunch" }).then((res) => {
    //     console.log(res); 
    // });
    
    //deleteOne
    // db.collection('Todos').deleteOne({ text: "eat lunch" }).then((res) => { console.log(res) });
    
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({ text: 'eat lunch' }).then((res) => { console.log(res) });


	client.close();
});



