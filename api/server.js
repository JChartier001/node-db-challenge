const express = require('express');


const Projects = require('../projects/project-router.js');
const Tasks = require('../tasks/tasks-router.js');
const Resources = require('../resources/resources-router.js');

const server = express();


server.use(express.json());

server.use('/api/projects', Projects);
// server.use('/api/tasks', Tasks);
// server.use('/api/resources', Resources);

module.exports = server;
