'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:ActuatorAddCtrl
 * @description
 * # ActuatorAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('ActuatorAddCtrl', function ($scope, $http, $state) {
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
          var url = 'http://127.0.0.1:8080/Actuator/';
          $http.post(url, $scope.data)
              .then(function success(response) {
                  console.log(response);
                  $state.transitionTo('actuator.index', {}, {reload: true});

              }, function error(response) {
                  console.log('请求执行器列表发生错误',response);
              });
      };

      self.init();
      $scope.submit = self.submit;
  });
