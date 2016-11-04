import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShowing: false,
  actions: {
    showUpdateForm() {
      this.set('updateFormShowing', true);
    },
    showUpdateFormHide() {
      this.set('updateFormShowing', false);
    },

    updateQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('updateFormShowing', false);

      //Clear the inputted values after they have been used via forEach loop:
      var self = this; //fixing the scope issue by creating this var outside of the forEach loop.
      Object.keys(params).forEach(function(key) { //Object=root object of JS; keys=function that return the keys.
        self.set(key, "");
      });
      this.sendAction('updateQuestion', question, params);
      //SEND TO 'question' route
    }
  }
});
