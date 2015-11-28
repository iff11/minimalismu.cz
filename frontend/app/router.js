import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('contact');
  this.route('item');
  this.route('share');
  this.route('give');
});

export default Router;
