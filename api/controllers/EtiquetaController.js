const database = require('../models');

class EtiquetaController {

    static async listarEtiquetas(req, res) {
        try {
            const etiquetas = await database.Etiquetas.findAll();
            return res.status(200).json(etiquetas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async buscarEtiquetaPorId(req, res) {
        const { id } = req.params;
        try {
            const etiqueta = await database.Etiquetas.findOne( {
                where: { 
                    id: Number(id) 
                }});
                return res.status(200).json(etiqueta);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async cadastrarEtiqueta(req, res) {
        const novaEtiqueta = req.body;
        try {
            const novaEtiquetaCriada = await database.Etiquetas.create(novaEtiqueta);
            return res.status(200).json(novaEtiquetaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarEtiqueta(req, res) {
        const { id } = req.params;
        const novasInformacoesEtiqueta = req.body;

        try {
            await database.Etiquetas.update(novasInformacoesEtiqueta, { where: { id: Number(id) }});
            const etiquetaAtualizada = await database.Etiquetas.findOne( { where: { id: Number(id) }});
            return res.status(200).json(etiquetaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }

    }

    static async excluirEtiqueta(req, res) {
        const { id } = req.params;

        try {
            await database.Etiquetas.destroy({ where: { id: Number(id) }});
            return res.status(200).json('Etiqueta excluída com sucesso.');
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = EtiquetaController;