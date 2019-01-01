'use strict';

describe('Controller: SensorIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var SensorIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SensorIndexCtrl = $controller('SensorIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SensorIndexCtrl.awesomeThings.length).toBe(3);
  });
});
