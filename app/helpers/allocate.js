import Ember from 'ember';

export function allocate(params/*, hash*/) {
  console.log(params[0]);
  console.log(params[1]);
}

export default Ember.Helper.helper(allocate);
