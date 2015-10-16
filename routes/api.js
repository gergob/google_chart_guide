var express = require('express');
var router = express.Router();

/* GET Hungarian cities population */
router.get('/cities', function (req, res, next) {

    var population = [
        //{
        //    'cityName': 'Budapest',
        //    'population': 1741041
        //},
        {
            'cityName': 'Debrecen',
            'population': 204124,
            'income': 135430
        },
        {
            'cityName': 'Miskolc',
            'population': 172637,
            'income': 151102
        },
        {
            'cityName': 'Szeged',
            'population': 164883,
            'income': 141233
        },
        {
            'cityName': 'Pecs',
            'population': 156649,
            'income': 138830
        },
        {
            'cityName': 'Gyor',
            'population': 128265,
            'income': 145900
        }
    ];

    res.json(population);
});

module.exports = router;
