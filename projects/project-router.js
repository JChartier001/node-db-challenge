const express = require("express");
// const db = require("../data/dbConfig.js");
const router = express.Router();
const Projects = require('./projects-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Projects.addNewProject(body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new project"})
    })
});

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {  
        if (projects.completed) {
            projects.completed = true
          }else{
              projects.completed = false
          }
          return res.status(200).json(projects)
        })    
        // res.status(200).json(projects);
             
    
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching projects"})
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id
    Projects.getTasksByProject(id)
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching tasks for specified project"})
    })
})

module.exports = router;

