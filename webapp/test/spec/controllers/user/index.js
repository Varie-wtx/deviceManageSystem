'use strict';

describe('Controller: UserIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var UserIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserIndexCtrl = $controller('UserIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserIndexCtrl.awesomeThings.length).toBe(3);
  });
});
