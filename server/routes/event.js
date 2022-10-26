const router = require("express").Router();
const handle = require('../handlers');
const auth = require('../middlewares/auth');

router.route('/')
.get(handle.showCrews)
.post(auth, handle.createEvent);

// router.get('/crew/:id', auth, handle.crewsEvents);

router.route('/:id')
.get(handle.getEvent)
.post(auth, handle.vote)
.delete(auth, handle.deleteEvent)

module.exports = router;