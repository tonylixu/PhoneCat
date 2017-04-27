'use strict';

angular.
  module('phoneList').
  component('phoneList', {
    // Notice that we use $ctrl to avoid using scope directly, $ctrl is an alias of the controller
    templateUrl: 'phone-list/phone-list.template.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.',
          age: 1
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.',
          age: 2
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.',
          age: 3
        }
      ];

      // Set the default value of orderProp to age
      this.orderProp = 'age';
    }
  });
