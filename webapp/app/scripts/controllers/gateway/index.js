'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:GatewayIndexCtrl
 * @description
 * # GatewayIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('GatewayIndexCtrl', function ($http,gateway,$scope) {
      var self = this;
      self.init = function () {
          var url = 'http://127.0.0.1:8080/Gateway/';
          $http.get(url)
              .then(function success(response) {
                  $scope.lists = response.data;
                  console.log("success");
              }, function error(response) {
                  console.log('error', response);
              });
      };
      self.delete = function (object) {
          // 触发后台的删除操作
          gateway.delete(object,function () {
              object._delete = true;
          });
      };
      self.init();
      $scope.delete = self.delete;
  });
