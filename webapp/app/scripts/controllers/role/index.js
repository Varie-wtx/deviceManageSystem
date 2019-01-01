'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:RoleIndexCtrl
 * @description
 * # RoleIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('RoleIndexCtrl', function (power, $scope, $http,role) {
        var self = this;
        self.init = function () {
            var url = 'http://127.0.0.1:8080/Role/';
            $http.get(url)
                .then(function success(response) {
                    $scope.lists = response.data;
                    console.log("success");
                }, function error(response) {
                    console.log('error', response);
                });
            self.load();
        };
        self.delete = function (object) {
            // 触发后台的删除操作
            role.delete(object,function () {
                object._delete = true;
            });
        };

        // 加载数据
        self.load = function () {
            power.getAllPowers(function (data) {
                $scope.powers = data;
            });
        };

        self.init();
        $scope.delete = self.delete;
    });
