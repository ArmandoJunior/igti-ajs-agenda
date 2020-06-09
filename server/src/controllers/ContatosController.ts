import { Request, Response } from 'express';
import Knex from '../database/connection';

class ContatosController {
    async index(request: Request, response: Response) {

        const contatos = await Knex('contatos')
            .select('contatos.*');
        return response.json(contatos);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const contato = await Knex('contatos').where('id', id).first();

        if (!contato) {
            return response.status(400).json({ message: 'Contato não encontrado.' });
        }

        return response.json({ contato });
    }

    async create(request: Request, response: Response) {
        const {
            nome,
            email,
            telefone,
            endereco,
        } = request.body;

        const trx = await Knex.transaction();

        const contato = {
            nome,
            email,
            telefone,
            endereco,
        };

        const insertedIds = await trx('contatos').insert(contato);

        const contato_id = insertedIds[0];

        await trx.commit();

        return response.json({
            id: contato_id,
            ...contato,
        });
    }

    async update(request: Request, response: Response) {
        const { id } = request.params;

        var contato = await Knex('contatos').where('id', id).first();

        if (!contato) {
            return response.status(400).json({ message: 'Contato não encontrado.' });
        }

        const {
            nome,
            email,
            telefone,
            endereco,
        } = request.body;

        const trx = await Knex.transaction();

        contato = {
            nome,
            email,
            telefone,
            endereco,
        };

        await trx('contatos').update(contato).where('id', id);

        await trx.commit();

        return response.json({
            message: "Atualizado com sucesso",
            ...contato,
        });
    }

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const contato = await Knex('contatos').where('id', id).select('id').first();

        if (!contato) {
            return response.status(400).json({ message: 'Contato não encontrado.' });
        }

        const deletedId = await Knex('contatos').delete(contato).where('id', id);

        const contato_id = deletedId[0];

        return response.json({
            mensagem: "Contato excluido com sucesso!!!",
        });
    }
}


export default ContatosController;
