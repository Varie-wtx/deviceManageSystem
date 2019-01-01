'use strict';

describe('Controller: StudentEditcourseCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var StudentEditcourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentEditcourseCtrl = $controller('StudentEditcourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentEditcourseCtrl.awesomeThings.length).toBe(3);
  });
});
