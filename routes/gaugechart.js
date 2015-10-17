var express = require('express');
var router = express.Router();

/* GET gaugechart page. */
router.get('/', function(req, res, next) {
    res.render('gaugechart', {
        selected: 'gaugechart'
    });
});

module.exports = router;
