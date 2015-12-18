import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      createTodo: function() {
        // Get the todo title set by the "New Todo" text field
        var title = this.get('newDate');
        var user = this.get('session.currentUser');
        // Create the new Todo model
        var todo = this.store.createRecord('walkedstaircase', {
          dateWalked: title,
          created: new Date(),
          user: user
        });

        // Clear the "New Todo" text field
        this.set('newDate', '');

        // Save the new model
        // todo.save();

        user.get('allWalkedStaircases').then(function(chapters) {
          chapters.addObject(todo);
          user.save().then(function() {
            todo.save();
          });
        });

      }
    }

});
