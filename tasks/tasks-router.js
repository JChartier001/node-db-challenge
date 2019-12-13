const express = require("express");
const router = express.Router();
const Tasks = require('./tasks-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Tasks.addNewTask(body)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new task"})
    })
});

router.get('/', (req, res) => {    
    Tasks.getTasks()
    .then(tasks => {
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
        res.status(500).json({message: "There was an error fetching tasks"})
    })
});

module.exports = router;