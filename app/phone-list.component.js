angular.
  module('phonecatApp').
  component('phoneList', {
    // Notice that we use $ctrl to avoid using scope directly, $ctrl is an alias of the controller
    template:
      '<ul>' +
        '<li ng-repeat="phone in $ctrl.phones">' +
          '<span>{{phone.name}}</span>' +
          '<p>{{phone.snippet}}</p>' +
        '</li>' +
      '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });