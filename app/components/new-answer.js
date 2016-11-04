import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerFormShowing: false,
  actions: {
    answerFormShow() {
      this.set('newAnswerFormShowing', true);
    },
    saveAnswer() {
      var params = {
        author: this.get('author'), //STRINGS
        content: this.get('content'),
        question: this.get('question') //NOTE: this is the actual model object passed down from rental.js
      };

      var self = this;
      Object.keys(params).forEach(function(key) {
        self.set(key, ''); //clears the input fields
      });

      this.set('newAnswerFormShowing', false);//hides the input form
      this.sendAction('saveAnswer', params); //send to rental with the params attached
    }
  }
});
