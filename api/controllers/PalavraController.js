const database = require('../models');

class PalavraController {

    static async listarPalavras(req, res) {
        try {
            const palavras = await database.Palavras.findAll();
            return res.status(200).json(palavras);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarPalavraPorId(req, res) {
        const { id } = req.params;
        try {
            const palavra = await database.Palavras.findOne( {
                where: { 
                    id: Number(id) 
                }});
                return res.status(200).json(palavra);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastrarPalavra(req, res) {
        const novaPalavra = req.body;
        try {
            const novaPalavraCriada = await database.Palavras.create(novaPalavra);
            return res.status(200).json(novaPalavraCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarPalavra(req, res) {
        const { id } = req.params;
        const novasInformacoesPalavra = req.body;

        try {
            await database.Palavras.update(novasInformacoesPalavra, { where: { id: Number(id) }});
            const palavraAtualizada = await database.Palavras.findOne( { where: { id: Number(id) }});
            return res.status(200).json(palavraAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async excluirPalavra(req, res) {
        const { id } = req.params;

        try {
            await database.Palavras.destroy({ where: { id: Number(id) }});
            return res.status(200).json('Palavra excluída com sucesso.');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async adicionarEtiquetaAUmaPalavra(req, res) {
        const {idPalavra, idEtiqueta} = req.params;

        try {
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = PalavraController;