import Ember from 'ember';

export default Ember.Component.extend({
  notesShowing: false,
  actions: {
    notesToggle: function() {
      var stateOfNotes = this.get('notesShowing');
      this.set('notesShowing', !stateOfNotes);
    }
  }
});
