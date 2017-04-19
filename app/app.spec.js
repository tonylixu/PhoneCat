describe('PhoneListController', function() {

  // Before each test we tell AngularJS to load the phonecatApp module
  beforeEach(module('phonecatApp'));

  // Inject the $controller service into our test function
  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    // Use $controller to create an intance of the PhoneListController
    var ctrl = $controller('PhoneListController', {$scope: scope});

    // Verify that the phones array property on the scope contains three records
    expect(scope.phones.length).toBe(3);
  }));
})