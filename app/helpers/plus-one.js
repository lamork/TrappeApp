import Ember from 'ember';

export function plusOne(params/*, hash*/) {
return parseInt(params) + 1;
}

export default Ember.Helper.helper(plusOne);
