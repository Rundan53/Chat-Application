const ChatHistory = require('../models/ChatHistory')


exports.postMessages = async (req, res)=>{
    try{
        const user = req.user;
        const {message} = req.body;
        console.log(`>>>>>>>>>${user.id}`)
        const responseMssg = await ChatHistory.create({message: message, userId: user.id})

        if(!message){
            throw new Error('Something wrong in creating history') 
        }

        res.status(201).json({success:true, message: responseMssg}); 
    }
    catch(err){
        res.status(500).json(err || 'Something went wrong')
    } 
}