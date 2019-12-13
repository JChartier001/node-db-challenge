const db = require('../data/dbConfig.js');

module.exports = {
    getTasks,
    postNewTask
}

getTasks(){
    return db('tasks');
}

postNewTask(body){
    return db('tasks')
    .insert(body, "id")
    .then(ids => {
        return db('tasks')
        .where({id})
        .first();
    })
}