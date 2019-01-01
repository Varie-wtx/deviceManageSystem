'use strict';

describe('Controller: TermIndexCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TermIndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TermIndexCtrl = $controller('TermIndexCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TermIndexCtrl.awesomeThings.length).toBe(3);
  });
});
