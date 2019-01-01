'use strict';

describe('Controller: TermEditCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TermEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermEditCtrl = $controller('TermEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TermEditCtrl.awesomeThings.length).toBe(3);
  });
});
