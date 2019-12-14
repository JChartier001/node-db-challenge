const express = require('express');
const cors = require('cors');


const Projects = require('../projects/project-router.js');
const Tasks = require('../tasks/tasks-router.js');
const Resources = require('../resources/resources-router.js');

const server = express();


server.use(express.json());
server.use(cors());

server.use('/api/projects', Projects);
server.use('/api/tasks', Tasks);
server.use('/api/resources', Resources);

module.exports = server;
