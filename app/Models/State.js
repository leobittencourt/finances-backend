'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class State extends Model {
  static boot() {
    super.boot();
    this.addHook('beforeSave', ['StateHook.validate']);
  }
}

module.exports = State;
