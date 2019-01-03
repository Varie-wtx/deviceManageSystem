'use strict';

describe('Controller: GatewayIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var GatewayIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GatewayIndexCtrl = $controller('GatewayIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GatewayIndexCtrl.awesomeThings.length).toBe(3);
  });
});
