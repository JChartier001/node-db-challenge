const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    update,
    remove
}

function find(){    
    return db('tasks');
    
}
function add(body){
    return db('tasks')
    .insert(body, "id")
    .then(ids => {
        return db('tasks')
        .where({id: ids[0]})
        .first();
    })
}

function update(changes, id){
    return db('tasks')
    .where({id})
    .update(changes)
    .then(() => {
        return db('tasks')
        .where({id})
        .first();
    })
    .catch(error => {
        console.log(error);
    })
}


function remove(id){
    return db('tasks')
        .where({id})
        .del()
        .then(() => {
            return db('tasks')
            .where({id})
            .first()
        })
        .catch(error => {
            console.log(error)
        })  
}