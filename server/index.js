
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
    .then(() => {
        console.log("Conection to the database successful");

        // Creacion del servidor
        app.listen(port, () => {
            console.log("Servidor corriendo correctamente en la url: localhost 3700");
        });
    })
    .catch(err => console.log(err));