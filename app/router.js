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
  this.route('registerwalkedstaircase');
  this.route('viewWalkedstaircases');
  this.route('viewwalkedstaircases');
});

export default Router;
