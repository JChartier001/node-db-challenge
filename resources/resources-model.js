const db = require('../data/dbConfig.js');

module.exports = {
    getResources,
    addNewResource,
    updateResource
}

function getResources(){
    return db('resources');
}

function addNewResource(body){
    return db('resources')
    .insert(body, "id")
    .then(id => {
        return db('resources')
        .where({id})
        .first();
    })
}

function updateResource(body, id){
    return db('resources')
    .where({id})
    .update(body,[body])
    .then(id => {
        console.log(id);
        return db('resources')
        .where({id})
        .first()
    })
    .catch(error => {
        console.log(error)
    })
}