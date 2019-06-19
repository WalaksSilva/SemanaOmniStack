const Usuario = require('../model/user');

module.exports = {
    async listar(req, res){
        try {            
            const usuarios = await Usuario.find().sort();
            return res.send(usuarios);
        } catch (error) {
            return res.status(400).send({ error: 'Falha na listagem. '+ error});
        }
    },

    async recuperar(req, res){
        try {
            const userId = req.params.id;
            const usuario = await Usuario.findById(userId);
        } catch (error) {
            
        }
    },

    async criar(req, res){
        try {
            const cadastro = await Usuario.create(req.body);
            //console.log(req.body);
            return res.send(cadastro);

        } catch (error) {
            return res.status(400).send({ error: 'Falha no resgistro. '+ error});
        }
    }
};