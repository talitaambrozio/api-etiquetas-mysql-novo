const {Router} = require('express');
const PalavraController = require('../controllers/PalavraController');

const router = Router();

router.get('/palavras', PalavraController.listarPalavras);
router.get('/palavras/:id', PalavraController.buscarPalavraPorId);
router.post('/palavras', PalavraController.cadastrarPalavra);
router.put('/palavras/:id', PalavraController.atualizarPalavra);
router.delete('/palavras/:id', PalavraController.excluirPalavra);

module.exports = router;