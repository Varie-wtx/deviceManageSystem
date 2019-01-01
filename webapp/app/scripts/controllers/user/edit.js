'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:UserEditCtrl
 * @description
 * # UserEditCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('UserEditCtrl', function ($stateParams, $http, $scope, $state) {
        var self = this;
        self.init = function () {
            // 应该获取当前这个班级
            var id = $stateParams.id;
            var url = 'http://127.0.0.1:8080/User/' + id;
            $http.get(url)
                .then(function success(response) {
                    // 把获取的班级，传给V层（V层进行绑定)
                    $scope.data = response.data;
                }, function error(response) {
                    console.log('请求失败 ' + url, response);
                });
        };


        // 提交数据
        self.submit = function () {
            var id = $stateParams.id;
            var url = 'http://127.0.0.1:8080/User/' + id;
            $http.put(url, $scope.data)
                .then(function success() {
                    // 把获取的班级，传给V层（V层进行绑定)
                    $state.transitionTo('user.index', {}, {reload: true});
                }, function error(response) {
                    console.log('请求失败 ' + url, response);
                });
        };


        self.init();
        $scope.submit = self.submit;
    });
