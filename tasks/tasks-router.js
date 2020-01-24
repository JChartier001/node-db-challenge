const express = require("express");
const router = express.Router();
const Tasks = require('./tasks-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Tasks.add(body)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new task"})
    })
});

router.get('/', (req, res) => {    
    Tasks.find()
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

module.expor

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;

    Tasks.update(changes, id)
    .then(changes => {
        res.status(200).json(changes)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error updating resource"})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Tasks.remove(id)
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