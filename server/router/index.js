const router = require('express').Router();
const fred = require('./fred');

router.use('/fred', fred);

module.exports = router;
