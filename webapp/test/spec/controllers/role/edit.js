'use strict';

describe('Controller: RoleEditCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var RoleEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleEditCtrl = $controller('RoleEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RoleEditCtrl.awesomeThings.length).toBe(3);
  });
});
