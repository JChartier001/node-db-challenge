const express = require("express");
const router = express.Router();
const Resources = require('./resources-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Resources.add(body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new resource"})
    })
});

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {      
        res.status(200).json(resources);
             
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching resources"})
    })
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;

    Resources.update(changes, id)
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

    Resources.remove(id)
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