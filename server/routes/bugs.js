const router = require('express').Router();
let Bug = require('../models/bug.model');

router.route('/').get( (req,res) => {
    Bug.find()
        .then(bugs => res.json(bugs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( (req, res) => {
    const {bugTitle, 
        bugDescription, 
        bugCreatedBy,
        bugAssignedTo, 
        bugStatus, 
        bugSeverity, 
        bugReproducibility} = req.body;

    const bugCreatedDate = Date.parse(req.body.bugCreatedDate);
    const bugDueDate = Date.parse(req.body.bugDueDate);

    const { bugStatusN,
        bugSeverityN,
        bugReproducibilityN } = Number(req.body);

    const newBug = new Bug({
        bugTitle,
        bugDescription,
        bugCreatedBy,
        bugCreatedDate,
        bugAssignedTo,
        bugDueDate,
        bugStatusN,
        bugSeverityN,
        bugReproducibilityN
    });

    newBug.save()
        .then( () => res.json('Bug added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
