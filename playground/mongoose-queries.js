const { mongoose } = require("./../Server/db/mongoose");
const { Todo } = require("./../server/models/Todo");

var id = '5e520c1607a8ffe849200eb7';

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => console.log('Todo', todo));

Todo.findById(id).then((todo) => console.log('Todo', todo));

