const db = require('../data/dbConfig.js');

module.exports = {
    getResources,
    addNewResource
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