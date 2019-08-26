'use strict';

const Schema = use('Schema');

class InvestmentsTypesSchema extends Schema {
  up() {
    this.create('investments_types', table => {
      table.increments();
      table.string('name').notNullable();
      table.string('description').notNullable();
      table.integer('risk', 1).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('investments_types');
  }
}

module.exports = InvestmentsTypesSchema;
