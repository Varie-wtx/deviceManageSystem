'use strict';

describe('Controller: RealtimedataIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var RealtimedataIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RealtimedataIndexCtrl = $controller('RealtimedataIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RealtimedataIndexCtrl.awesomeThings.length).toBe(3);
  });
});
