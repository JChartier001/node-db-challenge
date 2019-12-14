const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add,
    getTasksByProject,
    update,
    remove
}

function find()  {
    return db('projects');
}

function add(body) {
    return db('projects')
    .insert(body, "id")
    .then(ids => {
        return db('projects')
        .where({id: ids[0]})
        .first();
    })
    .catch(error => {
        console.log(error);
    })
}

function getTasksByProject(id) {
    return db('tasks as t')
    .select("p.name as projectName", "p.description as projectDesc", "t.id as taskID", "t.description as taskDesc", "t.notes as taskNote", "t.completed as taskCompleted" )
    .join("projects as p", "p.id", "t.project_id")
    .where("p.id", id);
}

function update(changes, id) {
    return db('projects')
    .where({id})
    .update(changes)
    .then(() => {
        return db('projects')
        .where({id})
        .first()
    })
    .catch(error => {
        console.log(error)
    })    
    }

function remove(id){
    return db('projects')
        .where({id})
        .del()
        .then(() => {
            return db('projects')
            .where({id})
            .first()
        })
        .catch(error => {
            console.log(error)
        })    
        

    
}
