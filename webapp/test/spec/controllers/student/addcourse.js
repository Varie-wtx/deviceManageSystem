'use strict';

describe('Controller: StudentAddcourseCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var StudentAddcourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentAddcourseCtrl = $controller('StudentAddcourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentAddcourseCtrl.awesomeThings.length).toBe(3);
  });
});
