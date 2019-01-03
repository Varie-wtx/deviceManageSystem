'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:gatewayList
 * @description
 * # gatewayList
 */
angular.module('webappApp')
  .directive('gatewayList', function (gateway) {
      var self = {};
      self.getAllGateTypes = function($scope){
          gateway.getAllGateTypes(function(gatewayTypes) {
              $scope.gatewayTypes = gatewayTypes;
          });
      };

      return {
          templateUrl: 'views/directive/gatewayList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllGateTypes($scope);
          }
      };
  });
