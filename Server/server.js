var express = require('express');
var bodyParser = require('body-parser');


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



app.listen(3000, () => {
    console.log('started on port 3000');
})