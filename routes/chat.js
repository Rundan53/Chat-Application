const {Router} = require('express');
const router = Router();

const userAuthentication = require('../middlewares/auth');

const userController = require('../controllers/user');
const chatController = require('../controllers/chat');

router.use(userAuthentication.authenticate);
router.get('/get-user', userController.getUser);
router.post('/message', chatController.postMessage);
router.get('/messages', chatController.getMessages);




module.exports = router;
