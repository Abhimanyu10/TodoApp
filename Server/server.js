var express = require('express');
var bodyParser = require('body-parser');

const { ObjectID } = require('mongodb');
const { mongoose } = require('./db/mongoose');
const { User } = require('./models/User')
const { Todo } = require('./models/Todo')

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
            res.send(err);
            res.status(400)
    })
});



app.get('/todos', (req, res) => {
    Todo.find().then((d) => {
        res.send({ d });
    }, (e) => {
            res.status(400).send(e);
    });
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //validate id using isValid
    if (!ObjectID.isValid(id)) {
        res.status(404);
        res.send();
        return console.log("id not valid");
    }

    Todo.findById(id).then((todo) => { 
        if (!todo) {
            return res.status(404).send();
        }
        return res.send({todo : todo});
    }).catch((e) => {
        res.status(400).send();
    })
})

app.listen(3000, () => {
    console.log('started on port 3000');
})