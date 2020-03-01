//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb')
//var obj = new ObjectId();
//console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err , client)=>{
	if(err){
		console.log(err);
		return console.log('unable to connect to mongodb');	
		
	}


	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');
    db.collection('Todos').find().toArray().then(docs=> {
        console.log('Todos')
        console.log(JSON.stringify(docs , undefined , 2));
    }, (err) => { 
        console.log('Unable to fetch todos');
    });

    db.collection('Todos').find({ completed: false }).toArray().then(
        (docs)=>{
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        }    
    );
    //find returns mongodb cursor 

    db.collection('Todos').find({
        _id : new ObjectId("5e4fb98b1407172e5064ba8f")
    }).toArray().then((docs) => { console.log(JSON.stringify(docs,undefined , 2))},(err) => {
        console.log('Unable to fetch todos', err);
    });

	client.close();
});



