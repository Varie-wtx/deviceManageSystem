'use strict';

describe('Controller: RoleIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var RoleIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleIndexCtrl = $controller('RoleIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RoleIndexCtrl.awesomeThings.length).toBe(3);
  });
});
