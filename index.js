const express = require('express');
const { sequelize } = require('./api/models');
const routes = require('./api/routes')

const app = express();
const port = 3000;

routes(app);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;