var express = require('express');
var router = express.Router();

/* GET barchart page. */
router.get('/', function(req, res, next) {
    res.render('barchart', {
        selected: 'barchart'
    });
});

module.exports = router;
