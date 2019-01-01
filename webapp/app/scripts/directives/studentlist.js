'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:studentList
 * @description
 * # studentList
 */
angular.module('webappApp')
  .directive('studentList', function (student) {
      var self = {};
      self.getAllStudents = function($scope){
          student.getAllStudents(function(students) {
              $scope.students = students;
          });
      };

      return {
          templateUrl: 'views/directive/studentList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllStudents($scope);
          }
      };
  });
