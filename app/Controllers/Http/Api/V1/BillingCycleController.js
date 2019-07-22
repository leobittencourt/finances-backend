'use strict';

const BillingCycle = use('BillingCycleModel');

class BillingCycleController {
  async index({ request }) {
    const query = request.all();
    const page = query.page || 1;
    return BillingCycle.query()
      .filter(query)
      .paginate(page, 20);
  }

  async store({ request }) {
    return BillingCycle.create(
      request.only(['billing_cycles_type_id', 'value', 'description'])
    );
  }

  async show({ params: { id } }) {
    return BillingCycle.findOrFail(id);
  }

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = BillingCycleController;
