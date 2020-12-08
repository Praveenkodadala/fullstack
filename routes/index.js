const router = require('express').Router();

router.use('/categories', require('./categories'))
router.use('/items', require('./items'))

module.exports = router;