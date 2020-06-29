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
    // try {
    //     const user = await User.findOne({email});

    // } catch (err) {

    // }
    // console.log("user is = ", user);
    
    // if (user) {
    //     const match = await bcrypt.compare(password, user.passwordHash);
 
    //     if(match) {
    //         //login
    //     }
    // }
        User.findOne({email})
        .then(user => {
            bcrypt.compare(pwd, user.pwd)
                .then(isMatch => {
                    let token = jwt.sign({
                        firstname: user.firstName,
                        lastname: user.lastName
                        
                      }, SECRET, { expiresIn: "1d" });
                    res.json( isMatch === true ? user : -1 )
                })
                .catch(err => res.json(-1));
                // .catch(err => res.status(401).json('Error: ' + err));
        })
        .catch(err => res.json(-1));
        // .catch(err => res.status(401).json('Error2: ' + err));
});

module.exports = router;
