'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:gatewayNameList
 * @description
 * # gatewayNameList
 */
angular.module('webappApp')
  .directive('gatewayNameList', function (gateway) {
      var self = {};
      self.getAllGateways = function($scope){
          gateway.getAllGateways(function(gateways) {
              $scope.gateways = gateways;
          });
      };

      return {
          templateUrl: 'views/directive/gatewaynameList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllGateways($scope);
          }
      };
  });
