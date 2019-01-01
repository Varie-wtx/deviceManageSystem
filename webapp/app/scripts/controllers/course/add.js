'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:CourseAddCtrl
 * @description
 * # CourseAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('CourseAddCtrl', function ($scope,$http,$state) {
      var self = this;
      self.init = function () {
          $scope.data = {
              name: '',
              courseState:0,
          };
      };

      self.submit = function () {
          // 把数据提交到/Teacher/这个地址，提交的方法为post
          var url = 'http://127.0.0.1:8080/Course/';
          $http.post(url, $scope.data)
              .then(function success() {
                  console.log('success');
                  $state.transitionTo('course.index', {}, { reload: true });
              }, function error(response) {
                  console.log('error',response);
              });
      };
      self.init();
      $scope.submit = self.submit;
  });
