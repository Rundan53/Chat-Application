const {Router} = require('express');
const router = Router();

const userAuthentication = require('../middlewares/auth');

const chatController = require('../controllers/chat');

router.use(userAuthentication.authenticate);
router.post('/message', chatController.postMessages);





module.exports = router;
