import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('users');
  this.authenticatedRoute('leaderboard');
  this.route('login');
  this.authenticatedRoute('registerwalkedstaircase');
  this.authenticatedRoute('viewwalkedstaircases');
});

export default Router;
