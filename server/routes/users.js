const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');
const SECRET = "just_a_random_secret";
const createToken = ({ id, email, name }) =>
  jwt.sign({ id, email, name }, SECRET, {
    expiresIn: "1d"
  });
// const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

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

router.route('/login').post( async (req, res) => {
    const { email, pwd } = req.body;
    console.log("login ", req.body);
    try {
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(pwd, user.pwd);

        // let token = jwt.sign({
        //     firstname: user.firstName,
        //     lastname: user.lastName
            
        //     }, SECRET, { expiresIn: "1d" });

        if (isMatch) {
            res.status(200).json(user); // status: OK
        } else {
            res.status(204).json(-1);  // status: no content
        }

    } catch (err) {
        res.json('Error: ' + err);
    }
});

module.exports = router;
