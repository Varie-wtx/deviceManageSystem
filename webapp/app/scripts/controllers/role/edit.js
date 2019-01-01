'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:RoleEditCtrl
 * @description
 * # RoleEditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('RoleEditCtrl', function (power,$scope,$stateParams,$http,$state) {
      var self = this;
      self.init = function(){
          // 应该获取当前这个班级
          var id = $stateParams.id;
          var url = 'http://127.0.0.1:8080/Role/' + id;
          $http.get(url)
              .then(function success(response) {
                  // 把获取的班级，传给V层（V层进行绑定)
                  $scope.data = response.data;
              }, function error(response) {
                  console.log('请求失败 ' + url, response);
              });
          self.load();
      };
      $scope.m = [];
      $scope.checked = [];
      self.selectOne = function () {
          angular.forEach($scope.powers, function (i) {
              var index = $scope.checked.indexOf(i);
              if (i.isSelecting && index === -1) {
                  $scope.checked.push(i);
              } else if (!i.isSelecting || i in $scope.powers && index !== -1) {
                  $scope.checked.splice(index, 1);
              }
          });
          if ($scope.powers.length === $scope.checked.length) {
              $scope.select_all = true;
          } else {
              $scope.select_all = false;
          }
          $scope.data.powers = $scope.checked;
          console.log($scope.checked);
      };

      // 加载数据
      self.load = function () {
          power.getAllPowers(function (data) {
              $scope.powers = data;
          });
      };

      self.submit = function () {
          var id = $stateParams.id;
          var url = 'http://127.0.0.1:8080/Role/' + id;
          $http.put(url, $scope.data)
              .then(function success() {
                  // 把获取的班级，传给V层（V层进行绑定)
                  $state.transitionTo('role.index', {}, {reload: true});
              }, function error(response) {
                  console.log('请求失败 ' + url, response);
              });
      };
      self.init();
      $scope.selectOne = self.selectOne;
      // $scope.selectAll = self.selectAll;
      $scope.submit = self.submit;
  });
