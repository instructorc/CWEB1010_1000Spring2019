var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('auth', { title: 'MPLSRenters Secure Authentication' });
});

module.exports = router;
