'use strict';

angular.
module('phoneList').
component('phoneList', {
  // Notice that we use $ctrl to avoid using scope directly, $ctrl is an alias of the controller
  templateUrl: 'phone-list/phone-list.template.html',
  controller: function PhoneListController($http) {
    // Introduce a local variable self that points back to the controller instance, since "this"
    // is not defined in the callback function.
    var self = this;
    self.orderProp = 'age';

    // Makes an HTTP GET request to our web server, asking for phones.json 
    // (URL is relative to index.html)
    // $http service returns a promise object, which has a then() method. It will return a
    // asynchronous response and assign the phone data to the controller, phones property.
    $http.get('phones/phones.json').then(function (response) {
      self.phones = response.data;
    });
  }
});