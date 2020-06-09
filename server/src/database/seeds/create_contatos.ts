import Knex from "knex";

export async function seed(knex: Knex) {
    await knex('contatos').insert([
        { nome: 'Armando', email: 'armando@email.com', telefone: '959595959', endereco: 'rua tal e tal' },
        { nome: 'Amanda', email: 'amanda@email.com', telefone: '959595959', endereco: 'rua tal e tal' },
        { nome: 'Anderson', email: 'Anderson@email.com', telefone: '959595959', endereco: 'rua tal e tal' },
        { nome: 'Rogerio', email: 'rogerio@email.com', telefone: '959595959', endereco: 'rua tal e tal' },
        { nome: 'Bruno', email: 'bruno@email.com', telefone: '959595959', endereco: 'rua tal e tal' },
        { nome: 'Aunio', email: 'aunio@email.com', telefone: '959595959', endereco: 'rua tal e tal' }
    ]);
}