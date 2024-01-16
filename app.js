const express = require('express');
const bodyParser = require('body-parser');

const mainPageController = require('./controllers/homePage');
const userController = require('./controllers/user')
const sequelize = require('./util/database')

const userRoutes = require('./routes/user')

const app = express();

require('dotenv').config();
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/user', userRoutes)
app.use('/', mainPageController.sendMainPage);


const PORT = process.env.PORT_NO;

function initialize(){
    sequelize.sync()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`>>>>Server is listening on port ${PORT}`)
        });
    })
    .catch((err)=>{
        console.log(err);
    });
    
}

initialize();