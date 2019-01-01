'use strict';

describe('Controller: DeviceIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var DeviceIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeviceIndexCtrl = $controller('DeviceIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeviceIndexCtrl.awesomeThings.length).toBe(3);
  });
});
