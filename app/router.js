import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', {path: '/question/:question_id'}); //id is being def here, and is called on question.js line 5
  this.route('answer', {path: '/answer/:answer_id'});
});

export default Router;
