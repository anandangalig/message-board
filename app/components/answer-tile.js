import Ember from 'ember';

export default Ember.Component.extend({
  details: Ember.computed('answer.author', 'answer.content', function() {
  return this.get('answer.author') + ' answered: ' + this.get('answer.content');
  }),
});
