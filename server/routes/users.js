// const { useReducer } = require('react');

const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get( (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( (req, res) => {
    const {firstName, lastName, email, pwd, phone, landingPage} = req.body;

    const newUser = new User({firstName, lastName, email, pwd, phone, landingPage});
    console.log("email = ", req.body);

    newUser.save()
        .then( () => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
