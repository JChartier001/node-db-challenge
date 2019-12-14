const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    update,
    remove
}

function find(){
    return db('resources');
}

function add(body){
    return db('resources')
    .insert(body, "id")
    .then(ids => {
        return db('resources')
        .where({id: ids[0]})
        .first();
    })
}

function update(changes, id){
    return db('resources')
    .where({id})
    .update(changes)
    .then(() => {
        return db('resources')
        .where({id})
        .first();
    })
    .catch(error => {
        console.log(error);
    })
}


function remove(id){
    return db('resources')
        .where({id})
        .del()
        .then(() => {
            return db('resources')
            .where({id})
            .first()
        })
        .catch(error => {
            console.log(error)
        })  
}
