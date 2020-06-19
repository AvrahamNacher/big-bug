const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // connect to mongodb database

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json()); // server will send and receive json, replaces bodyParser

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB db connected successfully');
})

// make server aware of routes 'users' and 'bugs'
const usersRouter = require('./routes/users');
// const bugsRouter = require('./routes/bugs');

app.use('/users', usersRouter);
// app.use('/bugs', bugsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
