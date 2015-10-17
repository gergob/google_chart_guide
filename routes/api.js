var express = require('express');
var router = express.Router();

/* GET Hungarian cities population */
router.get('/cities', function (req, res, next) {

    var cityData = [
        {
            'cityName': 'Debrecen',
            'population': 237888,
            'income': 135430
        },
        {
            'cityName': 'Miskolc',
            'population': 216470,
            'income': 151102
        },
        {
            'cityName': 'Szeged',
            'population': 201307,
            'income': 141233
        },
        {
            'cityName': 'Pecs',
            'population': 179215,
            'income': 138830
        },
        {
            'cityName': 'Gyor',
            'population': 182776,
            'income': 145900
        },
        {
            'cityName': 'Kecskemet',
            'population': 111863,
            'income': 178565
        },
        {
            'cityName': 'Szombathely',
            'population': 79348,
            'income': 115900
        },
        {
            'cityName': 'Szolnok',
            'population': 74343,
            'income': 118400
        },
        {
            'cityName': 'Erd',
            'population': 65267,
            'income': 122000
        },
        {
            'cityName': 'Szekesfehervar',
            'population': 108958,
            'income': 102000
        },
        {
            'cityName': 'Zalaegerszeg',
            'population': 61390,
            'income': 112050
        },
        {
            'cityName': 'Nyiregyhaza',
            'population': 118185,
            'income': 137855
        },
        {
            'cityName': 'Szigetszentmiklos',
            'population': 34877,
            'income': 111542
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

router.get('/gaugedata', function (req, res, next) {

    var data = [
        {
            data: '°C',
            value: 27.3
        },
        {
            data: '°C',
            value: 32.1
        },
        {
            data: '°C',
            value: 28.5
        }
    ];

    res.json(data);
});

module.exports = router;
