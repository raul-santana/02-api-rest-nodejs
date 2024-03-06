import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.uuid('session_id').after('id').index() // after--> serve para posicionar essa coluna após a coluna "id" | index --> serve para adicionar indíces nessa coluna session_id, assim o database sabe que haverão muitas buscas nessa coluna e armazenará caches para identificar
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('transactions', (table) => {
    table.dropColumn('session_id')
  })
}
