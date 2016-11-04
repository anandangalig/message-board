import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteThisQuestion(question) {
      this.sendAction('deleteThisQuestion', question);
    }
  }
});
