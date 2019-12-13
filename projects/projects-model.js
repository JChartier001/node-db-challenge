const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    addNewProject
}

function getProjects()  {
    return db('projects');
}

function addNewProject(body) {
    return db('projects')
    .insert(body, "id")
    .then(id => {
        return db('projects')
        .where({id})
        .first();
    })
    .catch(error => {
        res.status(400).json({message: "Project could not be added."})
    })
}