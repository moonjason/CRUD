const express = require('express');
const app = express();
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

const playersController = require('./controllers/players');
app.use('/players', playersController);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))