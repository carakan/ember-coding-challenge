import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    if(params.search === ''){
    return this.store.findAll('contact');
    } else {
    return this.store.query('contact', params);
    }
  },
  afterModel(model) {
    if (model.get('length') >= 1) {
      this.transitionTo('contacts.contact.show', model.get('firstObject'));
    }
  }
});
