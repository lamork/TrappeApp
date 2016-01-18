import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('leaderboard');
  this.route('registerwalkedstaircase', { path: '/' });
  this.route('viewwalkedstaircases');
  this.route('login');
});

export default Router;
