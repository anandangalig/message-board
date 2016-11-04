import Ember from 'ember';

export default Ember.Component.extend({
  answerUpdateFormShowing: false,
  actions: {
    showUpdateForm() {
      this.set('answerUpdateFormShowing', true);
    },
    hideAnswerUpdateForm() {
      this.set('answerUpdateFormShowing', false);
    },
    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        question: this.get('question')
      };
      this.set('updateFormShowing', false);

      //Clear the inputted values after they have been used via forEach loop:
      var self = this; //fixing the scope issue by creating this var outside of the forEach loop.
      Object.keys(params).forEach(function(key) { //Object=root object of JS; keys=function that return the keys.
        self.set(key, "");
      });
      this.sendAction('updateAnswer', answer, params);
      //SEND TO 'answer' route
    }
  }
});
