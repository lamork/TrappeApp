import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    // this.store.find('user').then(function(users) {
    //       var promises =  users.map(function(user) {
    //
    //         return Ember.RSVP.hash({
    //           user: user,
    //           allWalkedStaircases: user.get('allWalkedStaircases').then(function(allWalkedStaircases) {
    //             return allWalkedStaircases.filter(function(walkedStaircase) {
    //               return !allWalkedStaircases.get('archived');
    //             });
    //           });
    //         });
    //
    //       });
    //
    //       Ember.RSVP.all(promises).then(function(filteredProjects) {
    //         projectsController.set('filteredProjects', filteredProjects);
    //       });
    //
    //     });            




  }});
