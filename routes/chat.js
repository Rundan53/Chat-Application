const {Router} = require('express');
const router = Router();

const userAuthentication = require('../middlewares/auth');

const userController = require('../controllers/user');
const chatController = require('../controllers/chat');

router.use(userAuthentication.authenticate);
router.get('/get-user', userController.getUser);
router.post('/message/', chatController.postMessage);
router.get('/messages/:groupId', chatController.getMessages);
router.get('/get-users', chatController.getUsers)
router.post('/create-group', chatController.createGroup);
router.get('/get-mygroups', chatController.getCurrentUserGroups);
router.get('/get-group/:groupId', chatController.fetchGroupDetails);
router.get('/get-nonmembers', chatController.getUsersNotInGroup);
router.post('/update-group', chatController.updateGroup)



module.exports = router;
