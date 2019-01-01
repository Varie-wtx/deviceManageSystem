'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:UserAddCtrl
 * @description
 * # UserAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('UserAddCtrl', function ($scope, $http, $state,role) {
        var self = this;

        self.init = function () {
            $scope.data = {
                username: '',
                password: '',
                power: '',
            };
            self.getAllRoles();
        };

        // 获取所有的角色
        self.getAllRoles = function() {
            role.getAllRoles(function (data) {
                $scope.roles = data;
            });
        };

        self.submit = function () {
            var url = 'http://127.0.0.1:8080/User/';
            $http.post(url, $scope.data)
                .then(function success(response) {
                    console.log(response);
                    $state.transitionTo('user.index', {}, {reload: true});

                }, function error(response) {
                    console.log('请求用户列表发生错误',response);
                });
        };


        self.init();
        $scope.submit = self.submit;
    });
