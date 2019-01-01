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
      self.getAllGateways = function($scope){
          gateway.getAllGateways(function(gateways) {
              $scope.gateways = gateways;
          });
      };

      return {
          templateUrl: 'views/directive/gatewayList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllGateways($scope);
          }
      };
  });
