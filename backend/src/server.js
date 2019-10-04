const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const expressPort = 3333;

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-o5kxn.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/* Utilizando JSON para o Express */
app.use(express.json());
/* Utilizando rotas personalizadas */
app.use(routes);
/* Escutando o node na porta 3333 */
app.listen(expressPort);