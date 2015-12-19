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

        user.get('allWalkedStaircases').pushObject(todo);

        var _this = this;
        todo.save().then(function() {
          user.save();
          // _this.get('content').reload();
        });

        // Clear the "New Todo" text field
        this.set('newDate', '');
    }
}});
