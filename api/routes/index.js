const bodyParser = require('body-parser');
const etiquetas = require('./etiquetaRoutes');
const palavras = require('./palavraRoutes')


module.exports = app => {

    app.use(bodyParser.json(),
    etiquetas,
    palavras
    );
  
}