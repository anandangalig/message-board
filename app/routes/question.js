import Ember from 'ember';

export default Ember.Route.extend({
  model(parameters) {
    return this.store.findRecord('question', parameters.question_id);
  },
  
  actions: {
    deleteThisQuestion(question) {
      if(confirm('All answers belonging to it will be lost as well. Are you sure you want to delete this question?')) {
        var answer_deletions = question.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() { //Ember.RSVP.all() can package many promises and wait for them.
          return question.destroyRecord(); //promised callback function that deletes from Firebase
        });
        this.transitionTo('index');
      }
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) { //loops thru the keys of the passed in params, checks if it is not undefined(i.e. had new input to update)
          question.set(key,params[key]); // params[key]= the Value; Grab that value and put it in the key?
        }
      });
      question.save();
      this.transitionTo('index');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params); //creates the new object in Firebase database.
      var question = params.question; //due to the one-to-many rel, we are grabbing the given question associated with the passed in params.
      question.get('answers').addObject(newAnswer); //grabbing all the 'answers' of the above found question, and adding the newAnswer to it.
      newAnswer.save().then(function() { //saving the newAnswer first, then saving the question second via the callback function of the Promise.
        return question.save();
      });
      this.transitionTo('index');
    }
  }
});
