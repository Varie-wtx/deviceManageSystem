'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:sensorList
 * @description
 * # sensorList
 */
angular.module('webappApp')
  .directive('sensorList', function (sensor) {
      var self = {};
      self.getAllSensors = function($scope){
          sensor.getAllSensors(function(sensors) {
              $scope.sensors = sensors;
          });
      };

      return {
          templateUrl: 'views/directive/sensorList.html',
          restrict: 'E',
          link: function postLink($scope) {
              self.getAllSensors($scope);
          }
      };
  });
