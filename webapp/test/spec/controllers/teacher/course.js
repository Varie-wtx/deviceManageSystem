'use strict';

describe('Controller: TeacherCourseCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherCourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherCourseCtrl = $controller('TeacherCourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherCourseCtrl.awesomeThings.length).toBe(3);
  });
});
