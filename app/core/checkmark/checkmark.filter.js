'use strict';

angular.
  module('core').
    filter('checkmark', function() {
      return function(input) {
        // input evaluate to true or false
        return input ? '\u2713' : '\u2718';
      };
    });