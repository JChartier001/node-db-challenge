const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    postNewProject
}

getProjects(){
    return db('projects');
}

postNewProject(body){
    return db('projects')
    .insert(body, "id")
    .then(ids => {
        return db('projects')
        .where({id})
        .first();
    })
}