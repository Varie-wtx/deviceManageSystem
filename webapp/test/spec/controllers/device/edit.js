'use strict';

describe('Controller: DeviceEditCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var DeviceEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeviceEditCtrl = $controller('DeviceEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeviceEditCtrl.awesomeThings.length).toBe(3);
  });
});
