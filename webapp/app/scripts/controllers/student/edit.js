'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:StudentEditCtrl
 * @description
 * # StudentEditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('StudentEditCtrl', function ($stateParams,$http,$scope,$state) {
      var self = this;
      self.init = function () {
          // 接收id，然后使用这个ID获取我们想要编辑的实体
          var id = $stateParams.id;
          // 使用这个id去请求信息
          var url = 'http://127.0.0.1:8080/Student/' + id;

          $http.get(url)
              .then(function success(response) {
                  // 将请求来的信息绑定给v层
                  $scope.data = response.data;
              }, function error(response) {
                  console.log(url + 'error');
                  console.log(response);
              });

          self.submit = function () {
              var id = $stateParams.id;
              var url = 'http://127.0.0.1:8080/Student/' + id;

              $http.put(url, $scope.data)
                  .then(function success() {
                      console.log('更新成功');
                      $state.go('student.index', {}, {reload: true});
                  }, function error(response) {
                      console.log('更新失败',response);
                  });
          };
      };
      self.init();
      $scope.submit = self.submit;
  });
