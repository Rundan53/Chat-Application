const bcrypt = require('bcrypt');

const User = require('../models/User');


function isValidString(string) {
    if (string !== null && string.length !== 0) {
        return true;
    }
    return false;
}

exports.createUser = (req, res) => {
   
    const { username, email, phoneNumber, password } = req.body;

    if (!isValidString(username) || !isValidString(email) || !isValidString(phoneNumber) || !isValidString(password)) {
        return res.status(400).json({ message: 'Bad parameters: Something is missing' })
    }

    User.findOne({where:{email: email}})
    .then((user)=>{
        if(user){
            //if user already exist, send 409 conflict response
            return res.status(409).json({ message: 'User already exist' });
        }

        const saltRounds = 10;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if(err){
                throw new Error(err);
            }
    
            const user = await User.create({username, email, phoneNumber, password: hash});
            res.status(201).json({ message: 'User Created Successfully' });
           
        })
    })
    .catch((err)=>{
        res.status(500).json({message: err.message || 'Something went wrong'});
    })
  

}