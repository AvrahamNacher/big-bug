// const { useReducer } = require('react');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get( (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post( (req, res) => {
    const {firstName, lastName, email, pwd, phone, landingPage} = req.body;

    bcrypt.hash(pwd, saltRounds).then(function(hash) {
        // Store hash in your password DB.
        console.log('hash = ', hash);
        const newUser = new User({firstName, lastName, email, pwd: hash, phone, landingPage});
        console.log("email = ", req.body);
    
        newUser.save()
            .then( () => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route('/login').post( (req, res) => {
    const { email, pwd } = req.body;
    console.log("login ", req.body);
    User.findOne({email})
        .then(user => {
            bcrypt.compare(pwd, user.pwd)
                .then(isMatch => {
                    res.json(isMatch)
                })
                .catch(err => res.json(-1));
                // .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.json(-1));
        // .catch(err => res.status(400).json('Error2: ' + err));
});

module.exports = router;
