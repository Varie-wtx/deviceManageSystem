'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:SensorAddCtrl
 * @description
 * # SensorAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('SensorAddCtrl', function ($scope, $http, $state) {
      var self = this;

      self.init = function () {
          $scope.data = {
              name:'',
              gateway:{},
              nodeId:'',
              channelId:''
          };
      };


      self.submit = function () {
          var url = 'http://127.0.0.1:8080/Sensor/';
          $http.post(url, $scope.data)
              .then(function success(response) {
                  console.log(response);
                  $state.transitionTo('sensor.index', {}, {reload: true});

              }, function error(response) {
                  console.log('请求传感器列表发生错误',response);
              });
      };


      self.init();
      $scope.submit = self.submit;
  });
