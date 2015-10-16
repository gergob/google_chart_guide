var express = require('express');
var router = express.Router();

/* GET Hungarian cities population */
router.get('/cities', function (req, res, next) {

    var cityData = [
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

    res.json(cityData);
});

router.get('/population', function (req, res, next) {

    var population = [
        {
            'year': 1870,
            'population': 5011310
        },
        {
            'year': 1890,
            'population': 6009351
        },
        {
            'year': 1910,
            'population': 7612114
        },
        {
            'year': 1930,
            'population': 8685109
        },
        {
            'year': 1949,
            'population': 9204799
        },
        {
            'year': 1960,
            'population': 9961044
        },
        {
            'year': 1970,
            'population': 10300996
        },
        {
            'year': 1980,
            'population': 10709463
        },
        {
            'year': 1990,
            'population': 10374832
        },
        {
            'year': 2001,
            'population': 10198315
        },
        {
            'year': 2011,
            'population': 9937628
        }
    ];

    res.json(population);
});



module.exports = router;
