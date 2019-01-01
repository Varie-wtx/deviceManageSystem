'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:roleList
 * @description
 * # roleList
 */
angular.module('webappApp')
  .directive('roleList', function (role) {
      var self = {};
      self.getAllRoles = function($scope){
          role.getAllRoles(function(roles) {
              $scope.roles = roles;
          });
      };

      return {
          templateUrl: 'views/directive/roleList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllRoles($scope);
          }
      };
  });
