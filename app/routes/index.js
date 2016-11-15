import Ember from 'ember';

export default Ember.Route.extend({
  favoritesList: Ember.inject.service(),
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestionInModel(parameters) {
      var newQuestion = this.store.createRecord('question', parameters);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
