import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) { //parameters is an object passed with wiht link-to that holds answer_id.
    return this.store.findRecord('answer', parameters.answer_id);
  },
});
