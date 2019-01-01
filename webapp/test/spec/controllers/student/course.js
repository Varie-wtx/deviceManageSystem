'use strict';

describe('Controller: StudentCourseCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var StudentCourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentCourseCtrl = $controller('StudentCourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StudentCourseCtrl.awesomeThings.length).toBe(3);
  });
});
