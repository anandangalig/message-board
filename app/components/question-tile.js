import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  notesShowing: false,
  actions: {
    notesToggle: function() {
      var stateOfNotes = this.get('notesShowing');
      this.set('notesShowing', !stateOfNotes);
    },
    addToList(question) {
      this.get('favoritesList').add(question);
    }
  }
});
