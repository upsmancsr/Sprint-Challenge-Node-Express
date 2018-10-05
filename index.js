const express = require('express');

const server = express();
server.use(express.json());

const projectModel = require('./data/helpers/projectModel.js');

// Get all projects
server.get('/api/projects', (req, res) => {
    projectModel
        .get()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// Get a specific project
server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    projectModel
        .get(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

//Get actions for an individual project
server.get('/api/projects/:id/projectActions', (req, res) => {
    const {id} = req.params;
    projectModel
        .getProjectActions(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});



const port = 4000;

server.listen(port, () => 
    console.log(`API is running on port ${port}.`)
);

