'use strict';

describe('Controller: TeacherEditcourseCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var TeacherEditcourseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeacherEditcourseCtrl = $controller('TeacherEditcourseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeacherEditcourseCtrl.awesomeThings.length).toBe(3);
  });
});
