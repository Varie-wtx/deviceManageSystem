'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:ActuatorIndexCtrl
 * @description
 * # ActuatorIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('ActuatorIndexCtrl', function ($scope, $http,sensor) {
      var self = this;
      self.init = function () {
          var url = 'http://127.0.0.1:8080/Sensor/';
          $http.get(url)
              .then(function success(response) {
                  $scope.lists = response.data;
                  console.log("success");
              }, function error(response) {
                  console.log('error', response);
              });
          self.load();
      };
      self.delete = function (object) {
          // 触发后台的删除操作
          sensor.delete(object,function () {
              object._delete = true;
          });
      };

      // 加载数据
      self.load = function () {
          sensor.getAllSensors(function (data) {
              $scope.sensors = data;
          });
      };

      self.init();
      $scope.delete = self.delete;
  });
