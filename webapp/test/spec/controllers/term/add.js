'use strict';

describe('Controller: TermAddCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TermAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermAddCtrl = $controller('TermAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TermAddCtrl.awesomeThings.length).toBe(3);
  });
});
