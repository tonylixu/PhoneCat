'use strict';

angular.
  module('core.phone').
  // The factory function is similar to a controller's constructor in that both
  // can declare dependencies to be injected via function arguments.
  factory('Phone', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);