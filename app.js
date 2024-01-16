const express = require('express');
const bodyParser = require('body-parser');

const homePageController = require('./controllers/pages');
const ezchatPageController = require('./controllers/pages')
const userController = require('./controllers/user');
const sequelize = require('./util/database');

const userRoutes = require('./routes/user');

const app = express();

require('dotenv').config();
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/user', userRoutes);
app.use('/ezchat', ezchatPageController.sendChatPage)
app.get('/', homePageController.sendMainPage);


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