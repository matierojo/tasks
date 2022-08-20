// creamos e inicializamos el servidor

const express = require('express');
const morgan = require('morgan');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares - Funciones que se ejecutan antes de las rutas
app.use(morgan('dev'));
app.use(express.json()); // antes era el bodyParser

// Routes


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});