const express = require("express");
// const db = require("../data/dbConfig.js");
const router = express.Router();
const Projects = require('./projects-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Projects.add(body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new project"})
    })
});

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {        
        projects.map(projects => {
        if (projects.completed) {
            projects.completed = true
          } else {
            projects.completed = false
          }        
        })    
        return res.status(200).json(projects)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching projects"})
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    Projects.getTasksByProject(id)
    .then(tasks =>{
        tasks.map(tasks => {
            if (tasks.completed) {
              tasks.completed = true
            }else{
                tasks.completed = false
            }            
          })
          return res.status(200).json(tasks)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching tasks for specified project"})
    })
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Projects.update(changes, id)
    .then(changes => {
        
        res.status(200).json(changes)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "The project could not be updated"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Projects.remove(id)
    .then(ids => {
        console.log(ids);
        res.status(200).json({message: "Project was deleted"})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({message: "The project could not be deleted"})
    })
})


module.exports = router;

