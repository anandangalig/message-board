import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  showFavorites: false,

  actions: {
    showFavoritesList: function() {
      var stateOfList = this.get('showFavorites');
      // console.log(stateOfList);
      this.set('showFavorites', !stateOfList);
      // console.log(this.get('showFavorites'));
    },

    hideFavoritesList: function() {
      var stateOfList = this.get('showFavorites');
      // console.log(stateOfList);
      this.set('showFavorites', !stateOfList);
      // console.log(this.get('showFavorites'));
    }
  }

});
