'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:teacherlist
 * @description
 * # teacherlist
 */
angular.module('webappApp')
  .directive('teacherlist', function (teacher) {
      var self = {};
      self.getAllteachers = function($scope){
          teacher.getAllTeachers(function(klasses) {
              $scope.klasses = klasses;
          });
      };

      return {
          templateUrl: 'views/directive/teacherList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllTeachers($scope);
          }
      };
  });
