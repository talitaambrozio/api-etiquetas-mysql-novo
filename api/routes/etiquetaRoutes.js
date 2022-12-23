const {Router} = require('express');
const EtiquetaController = require('../controllers/EtiquetaController');

const router = Router();

router.get('/etiquetas', EtiquetaController.listarEtiquetas);
router.get('/etiquetas/:id', EtiquetaController.buscarEtiquetaPorId);
router.post('/etiquetas', EtiquetaController.cadastrarEtiqueta);
router.put('/etiquetas/:id', EtiquetaController.atualizarEtiqueta);
router.delete('/etiquetas/:id', EtiquetaController.excluirEtiqueta);

module.exports = router;