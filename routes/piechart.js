var express = require('express');
var router = express.Router();

/* GET piechart page. */
router.get('/', function(req, res, next) {
    res.render('piechart', {
        selected: 'piechart'
    });
});

module.exports = router;
