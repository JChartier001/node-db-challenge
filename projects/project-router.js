const express = require("express");
const db = require("../data/db-config.js");
const router = express.Router();

router.post('/', (req, res) => {
    projects.insert()
})