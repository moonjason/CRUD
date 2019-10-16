const express = require('express');
const router = express.Router();

const Players = require('../models/players');

router.get('/', (req, res) => {
    res.render('index.ejs', {
        players: Players,
    })
});

router.delete('/:index', (req, res) => {

    Players.splice(req.params.index, 1);
    res.redirect('/players');
})

module.exports = router;