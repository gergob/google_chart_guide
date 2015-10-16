var express = require('express');
var router = express.Router();

/* GET donutchart page. */
router.get('/', function(req, res, next) {
    res.render('donutchart', {
        selected: 'donutchart'
    });
});

module.exports = router;
