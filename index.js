const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const authRouter = require('./routes/auth');
require("dotenv").config();

// Listening to the port provided
app.listen(process.env.PORT, () => {
    console.log('App listening at port ' + process.env.PORT)
    console.log("NAME IS: " + process.env.NAME);
});

app.set('view engine', 'hbs');

app.engine('hbs', hbs.engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultView: 'main'
}));

// serve static files
app.use(express.static('public'));



app.use('/', authRouter);