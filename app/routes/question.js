import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) {
    return this.store.findRecord('question', parameters.question_id);
  },
  actions: {
    deleteThisQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) { //loops thru the keys of the passed in params, checks if it is not undefined(i.e. had new input to update)
          question.set(key,params[key]); // params[key]= the Value
        }
      });
      question.save();
      this.transitionTo('index');

    }
  }
});
