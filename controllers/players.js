const express = require('express');
const router = express.Router();

const Players = require('../models/players');

router.get('/players', (req, res) => {
    res.render('index.ejs', {
        players: Players,
    })
});

module.exports = router;