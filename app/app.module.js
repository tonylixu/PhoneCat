// Define the `phonecatApp` modle
angular.module('phonecatApp', [
  'ngRoute',
  // ...which depends on the `phoneList` module
  'phoneList'
]);