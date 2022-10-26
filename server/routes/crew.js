const router = require("express").Router();
const handle = require('../handlers');
const auth = require('../middlewares/auth');

router.route('/')
.get(handle.showCrews)
.post(auth, handle.createCrew);

// router for get crew events

router.route('/:id')
.get(handle.getCrew)
.delete(auth, handle.deleteCrew);

module.exports = router;

