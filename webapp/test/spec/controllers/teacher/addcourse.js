'use strict';

describe('Controller: TeacherAddcourseCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherAddcourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherAddcourseCtrl = $controller('TeacherAddcourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherAddcourseCtrl.awesomeThings.length).toBe(3);
  });
});
