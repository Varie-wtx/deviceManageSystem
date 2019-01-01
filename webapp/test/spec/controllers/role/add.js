'use strict';

describe('Controller: RoleAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var RoleAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RoleAddCtrl = $controller('RoleAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RoleAddCtrl.awesomeThings.length).toBe(3);
  });
});
