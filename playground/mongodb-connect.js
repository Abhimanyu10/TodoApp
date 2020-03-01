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
    	//db.collection('Todos')
	//.insertOne({
	//	text:'Something To do',
	//	completed: false
	//},(err , res)=>{
	//	if (err){
	//		return console.log('Unable To insert todo' , err);
	//	}
	//console.log(JSON.stringify(res.ops , undefined , 2));
	//});

	db.collection('Users')
	.insertOne( {
		_id  : 123,
		name : 'Andrew',
		age  : 24,
		location : 'philadelphia'
	},(err , res)=>{
		if(err){
			return console.log(err , 'Unable to insert in users collection');
		}
		console.log(JSON.stringify(res.ops,undefined , 2));
	});
 
	client.close();
});



