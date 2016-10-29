import Ember from 'ember';

export default Ember.Component.extend({
  newFormShow: false,
  actions: {
    newQuestionFormShow() {
      this.set('newFormShow', true);
    },

    submitQuestion() { //here, merely gathering the parameters?
      var parameters = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.set('newFormShow', false);

      this.set('author', '');
      this.set('content', '');
      this.set('notes', '');

      this.sendAction('saveQuestion', parameters);
    },

    hideQuestionFormShow() {
      this.set('newFormShow', false);
    }
  }
});
