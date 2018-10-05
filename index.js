const express = require('express');

const server = express();
server.use(express.json());

const projectModel = require('./data/helpers/projectModel.js');
const actionModel = require('./data/helpers/actionModel.js');

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

// Create a new project
server.post('/api/projects', (req, res) => {
    console.log(req.body);
    const { name, description } = req.body;
    const newProject = { name, description };
    console.log(newProject);
    projectModel
        .insert(newProject)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}); 

// Update a project
server.put('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    const { name, description } = req.body; 
    const updatedProject = { name, description };
    projectModel
        .update(id , updatedProject)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// Delete a project
server.delete('/api/projects/:id', (req, res) => {
    projectModel
        .remove(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// Get all actions
server.get('/api/actions', (req, res) => {
    actionModel
        .get()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// Get a specific action
server.get('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    actionModel
        .get(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// Create a new action
server.post('/api/actions', (req, res) => {
  
    const { action } = req.body;
    const newAction = { action };
   
    actionModel
        .insert(newAction)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err);
        })
}); 

// Update an action
server.put('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    const { description, notes } = req.body; 
    const updatedAction = { description, notes };
    actopmModel
        .update(id , updatedAction)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

// Delete an action
server.delete('/api/projects/:id', (req, res) => {
    actionModel
        .remove(id)
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

