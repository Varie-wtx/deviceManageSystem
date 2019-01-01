'use strict';

describe('Controller: SensorEditCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var SensorEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SensorEditCtrl = $controller('SensorEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SensorEditCtrl.awesomeThings.length).toBe(3);
  });
});
