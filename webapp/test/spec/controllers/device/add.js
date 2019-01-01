'use strict';

describe('Controller: DeviceAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var DeviceAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeviceAddCtrl = $controller('DeviceAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeviceAddCtrl.awesomeThings.length).toBe(3);
  });
});
