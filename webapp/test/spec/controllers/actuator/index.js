'use strict';

describe('Controller: ActuatorIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var ActuatorIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActuatorIndexCtrl = $controller('ActuatorIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActuatorIndexCtrl.awesomeThings.length).toBe(3);
  });
});
