'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:klassList
 * @description
 * # klassList
 */
angular.module('webappApp')
  .directive('klassList', function (klass) {
      var self = {};
      self.getAllKlasses = function($scope){
          klass.getAllKlasses(function(klasses) {
              $scope.klasses = klasses;
          });
      };

      return {
          templateUrl: 'views/directive/klassList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllKlasses($scope);
          }
      };
  });
