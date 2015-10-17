var express = require('express');
var router = express.Router();

/* GET geochart page. */
router.get('/', function(req, res, next) {
    res.render('geochart', {
        selected: 'geochart'
    });
});

module.exports = router;
