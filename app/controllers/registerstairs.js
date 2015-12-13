import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
      createTodo: function() {
        // Get the todo title set by the "New Todo" text field
        var title = this.get('newDate');

        // Create the new Todo model
        var todo = this.store.createRecord('stairs', {
          date: title,
          created: new Date()
        });

        // Clear the "New Todo" text field
        this.set('newDate', '');

        // Save the new model
        todo.save();
      }
    }

});
