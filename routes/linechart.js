var express = require('express');
var router = express.Router();

/* GET linechart page. */
router.get('/', function(req, res, next) {
    res.render('linechart', {
        selected: 'linechart'
    });
});

module.exports = router;
