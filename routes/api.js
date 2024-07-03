const  express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');
const userController = require('../controller/userController');
const auth = require('../middlewares/auth');

// user
router.post('/registerUser', userController.registerUser);

router.post('/loginUser', userController.loginUser);

// event
router.post('/createEvent', eventController.createEvent);

router.get('/getEventByUserId', eventController.getEventByUserId);

router.put('/updateEvent/:id', eventController.updateEvent);

router.delete('/deleteEvent/:id', eventController.deleteEvent);

module.exports = router;
