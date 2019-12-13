const express = require("express");
// const db = require("../data/dbConfig.js");
const router = express.Router();
const Projects = require('./projects-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Projects.addNewProject(body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new project"})
    })
});

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching projects"})
    })
});

module.exports = router;

