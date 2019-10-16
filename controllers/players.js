const express = require('express');
const router = express.Router();

const Players = require('../models/players');

router.get('/', (req, res) => {
    res.render('index.ejs', {
        players: Players,
    })
});

router.get('/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        players: Players[req.params.index],
        index: [req.params.index],
    })
});

router.put('/:index', (req, res) => {
    if (req.body.allstar === 'on'){
        req.body.allstar = true;
    } else {
        req.body.allstar = false;
    }
    Players[req.params.index] = req.body;
    res.redirect('/players');
})

router.delete('/:index', (req, res) => {

    Players.splice(req.params.index, 1);
    res.redirect('/players');
});

module.exports = router;