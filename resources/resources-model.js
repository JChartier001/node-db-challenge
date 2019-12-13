const db = require('../data/dbConfig.js');

module.exports = {
    getResources,
    postNewResource
}

getResources(){
    return db('resources');
}

postNewProject(body){
    return db('resources')
    .insert(body, "id")
    .then(ids => {
        return db('resources')
        .where({id})
        .first();
    })
}