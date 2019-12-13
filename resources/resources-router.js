const express = require("express");
const router = express.Router();
const Resources = require('./resources-model.js')

router.post('/', (req, res) => {
    const body = req.body;
    Resources.addNewResource(body)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error creating new resource"})
    })
});

router.get('/', (req, res) => {
    Resources.getResources()
    .then(resources => {      
        res.status(200).json(resources);
             
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "There was an error fetching resources"})
    })
});

module.exports = router;