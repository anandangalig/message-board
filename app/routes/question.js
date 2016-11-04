import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) {
    return this.store.findRecord('question', parameters.question_id);
  },
  actions: {
    deleteThisQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
