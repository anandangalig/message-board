import Ember from 'ember';

export default Ember.Route.extend({
  favoritesList: Ember.inject.service(),
  showFavorites: false,
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestionInModel(parameters) {
      var newQuestion = this.store.createRecord('question', parameters);
      newQuestion.save();
      this.transitionTo('index');
    },
    // notesToggle: function() {
    //   var stateOfNotes = this.get('notesShowing');
    //   this.set('notesShowing', !stateOfNotes);
    // },
    showFavoritesList: function() {
      var stateOfList = this.get('showFavorites');
      this.set('showFavorites', !stateOfList);
      console.log(this.get('showFavorites'));
    },

    hideFavoritesList: function() {
      var stateOfList = this.get('showFavorites');
      this.set('showFavorites', !stateOfList);
    }
  }
});
