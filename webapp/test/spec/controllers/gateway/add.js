'use strict';

describe('Controller: GatewayAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var GatewayAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GatewayAddCtrl = $controller('GatewayAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GatewayAddCtrl.awesomeThings.length).toBe(3);
  });
});
