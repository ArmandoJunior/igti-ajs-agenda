import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('contatos', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('endereco').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('contatos')
}