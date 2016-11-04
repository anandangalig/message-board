import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) { //parameters is an object passed with wiht link-to that holds answer_id.
    return this.store.findRecord('answer', parameters.answer_id);
  },
  actions: {
    updateAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('index');
    },
    deleteAnswer(model) {
      model.destroyRecord();
      this.transitionTo('index');
    }
  }
});
