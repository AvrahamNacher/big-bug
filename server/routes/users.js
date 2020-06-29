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

router.route('/isUnique').post( async (req, res) => {
    const { email } = req.body;
    // console.log("is Unique email ", email);
    try {
        const isUnique = await User.findOne ({email}) ? false : true;
        // console.log("unique? ", isUnique);
        res.status(200).json(isUnique);
    } catch (err) {
        res.status(400).json("Error: " + err)
    }
});

router.route('/register').post( async (req, res) => {
    const {firstName, lastName, email, pwd, phone, landingPage} = req.body;
    // console.log("register ", req.body);

    bcrypt.hash(pwd, saltRounds).then(function(hash) {
        // Store hash in your password DB
        // console.log('hash = ', hash);
        const newUser = new User({firstName, lastName, email, pwd: hash, phone, landingPage});
        newUser.save()
            .then( () => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
});

router.route('/update').post( async (req, res) => {
    const {firstName, lastName, email, newPwd, phone, landingPage} = req.body;
    // console.log("register ", req.body);
    let updateData = {firstName, lastName, email, phone, landingPage};

    if (newPwd) {
        let hashedPwd = await bcrypt.hash(newPwd, saltRounds);
        // console.log("hashedPwd = ", hashedPwd);
        updateData = {...updateData, pwd: hashedPwd};
    } 
    // console.log("updateData = ", updateData);

    try {
        User.updateOne({email}, updateData)
            .then( () => res.json('User updated!'))
            .catch(err => res.status(400).json('Error: ' + err));

    } catch (err) {
        res.json('Error: ' + err);
    }

    // res.json("Done");
    // bcrypt.hash(pwd, saltRounds).then(function(hash) {
    //     // Store hash in your password DB
    //     // console.log('hash = ', hash);
    // });
});

router.route('/login').post( async (req, res) => {
    const { email, pwd } = req.body;
    // console.log("login ", req.body);
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

// router.route('/register').post( async (req, res) => {
//     const { email, pwd, firstName, lastName, phone } = req.body;
//     console.log("register ", req.body);

//     const result = await User.

//     res.json("Done");
// })

module.exports = router;
