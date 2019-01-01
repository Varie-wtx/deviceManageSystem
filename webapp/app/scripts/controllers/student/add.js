'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:StudentAddCtrl
 * @description
 * # StudentAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('StudentAddCtrl', function ($scope,$state,$http) {
      var self = this;
      self.init = function () {
          $scope.data = {
              username: '',
              name: '',
              sex: 'true',
              email: '',
              userId: '',
              password: '',
              klass:{}
          };
      };

      self.submit = function () {
          // 把数据提交到/Teacher/这个地址，提交的方法为post
          var url = 'http://127.0.0.1:8080/Student/';
          $http.post(url, $scope.data)
              .then(function success() {
                  console.log('success');
                  $state.transitionTo('student.index', {}, { reload: true });
              }, function error(response) {
                  console.log('error',response);
              });
      };
      self.init();
      $scope.submit = self.submit;
  });
