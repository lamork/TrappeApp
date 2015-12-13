import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.authenticatedRoute('history');
  this.route('leaderboard');
  this.route('login');
  this.route('registerstairs');
});

export default Router;
