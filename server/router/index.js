const router = require('express').Router();
const fred = require('./fred');
const crawler = require('./crawler')

router.use('/fred', fred);
router.use('/crawler', crawler);

module.exports = router;
