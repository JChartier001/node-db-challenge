const db = require('../data/dbConfig.js');

module.exports = {
    getTasks,
    addNewTask
}

function getTasks(){
    return db('tasks');
}

function addNewTask(body){
    return db('tasks')
    .insert(body, "id")
    .then(ids => {
        return db('tasks')
        .where({id})
        .first();
    })
}