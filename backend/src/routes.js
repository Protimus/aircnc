const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');

/* Endpoint padrão */
routes.get('/', (req, res) => {
    return res.json('API Rest para Aircnc');
});

/* Endpoint para adição de usuários */
routes.post('/sessions', SessionController.store);

module.exports = routes;