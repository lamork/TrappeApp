import Ember from 'ember';

var A = Ember.A;
var computed = Ember.computed;
var get = Ember.get;
var isPresent = Ember.isPresent;

export default Ember.Controller.extend({
  usersByDaysWalked: groupBy('model', 'user.name')
});

export default function groupBy(collection, property) {
  var dependentKey = collection + '.@each.' + property;

  return computed(dependentKey, function() {
    var groups = new A();
    var items = get(this, collection);

    items.forEach(function(item) {
      var value = get(item, property);
      var group = groups.findBy('value', value);

      if (isPresent(group)) {
        group.total += 1;
      } else {
        group = { property: property, value: value, total: 1 };
        groups.push(group);
      }
    });

    var sortedGroups = groups.sort(SortTotalHighToLow)
    return sortedGroups;
  }).readOnly();
}

function SortTotalHighToLow(a, b) {
	return b.total-a.total;
}
