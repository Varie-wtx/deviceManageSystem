'use strict';

describe('Controller: SensorAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var SensorAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SensorAddCtrl = $controller('SensorAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SensorAddCtrl.awesomeThings.length).toBe(3);
  });
});
