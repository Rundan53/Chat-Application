const express = require('express');
const bodyParser = require('body-parser');



const sequelize = require('./util/database');

const userRoutes = require('./routes/user');
const passwordRoutes = require('./routes/password');
const pageRoutes = require('./routes/page')
const chatRoutes = require('./routes/chat')

const User = require('./models/User');
const ForgotPassword = require('./models/ForgotPassword');
const ChatHistory = require('./models/ChatHistory');

const app = express();

require('dotenv').config();
app.use(bodyParser.json());

app.use(express.static('public'));


app.use('/user', userRoutes);
app.use('/password', passwordRoutes);
app.use('/chat', chatRoutes);
app.use(pageRoutes);



User.hasMany(ForgotPassword);
ForgotPassword.belongsTo(User);
User.hasMany(ChatHistory);
ChatHistory.belongsTo(User);

const PORT = process.env.PORT_NO;

function initiate(){
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

initiate();