const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('database')


require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri,database.db,{useNewUrlParser: true,useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

app.listen(port,() => {
    console.log(`Server is running on port: ${port}`);
    
});
const studentAPI = require('../backend/routes/student.route')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
     extended: true
    }));
app.use('/',studentAPI)

