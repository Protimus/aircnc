const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

/* Endpoint padrão */
routes.get('/', (req, res) => {
    return res.json('API Rest para Aircnc');
});

/* Endpoint para adição de usuários */
routes.post('/sessions', SessionController.store);

/* Endpoint para adição de spots */
routes.post('/spots', SpotController.store);

module.exports = routes;