import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned().primary()
      table.integer('task_id').unsigned().references('id').inTable('tasks').onDelete('CASCADE')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('message')
      table.timestamps() 
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
