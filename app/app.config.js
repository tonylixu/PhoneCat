// Config the $route service for our application
angular.
  module('phonecatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

      // Set the hash-prefix to !. This prefix will appear in the links to our client-side routes,
      // right after the hash (#) symbol and before the actual path
      // Setting a prefix is not necessary, but it is considered a good practice, and "!" is the
      // most commonly used prefix. More read here:
      // https://docs.angularjs.org/guide/migration#migrating-from-1-5-to-1-6
      $locationProvider.hashPrefix('!');

      // when('/phones'): If URL hash fragment is "/phones", AngularJS will create an instance of 
      //                  the phoneList component to manage the view
      // when('/phones/:phoneId'): If URL hash fragment is "/phones/<phoneId>", create an instance
      //                           of phoneDetail component
      // otherwise('/phones'): Default a fallback route to redirect to.
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '{{$ctrl.phoneId}} <phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);