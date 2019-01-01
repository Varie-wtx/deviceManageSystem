'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:KlassAddCtrl
 * @description
 * # KlassAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('KlassAddCtrl', function ($scope,$http,$state) {
      var self = this;
      self.init = function () {
          $scope.data = {
              name: '',
          };
      };

      self.submit = function () {
          // 把数据提交到/Klass/这个地址，提交的方法为post
          var url = 'http://127.0.0.1:8080/Klass/';
          $http.post(url, $scope.data)
              .then(function success() {
                  console.log('success');
                  $state.transitionTo('klass.index', {}, { reload: true });
              }, function error(response) {
                  console.log('error',response);
              });
      };
      self.init();
      $scope.submit = self.submit;
  });
