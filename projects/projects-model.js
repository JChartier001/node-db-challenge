const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    addNewProject,
    getTasksByProject
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

function getTasksByProject(id) {
    return db('tasks as t')
    .select("p.name as projectName", "p.description as projectDesc", "t.id as taskID", "t.description as taskDesc", "t.notes as taskNote", "t.completed as taskCompleted" )
    .join("projects as p", "p.id", "t.project_id")
    .where("p.id", id);
}