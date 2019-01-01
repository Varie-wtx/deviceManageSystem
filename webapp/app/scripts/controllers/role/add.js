'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:RoleAddCtrl
 * @description
 * # RoleAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('RoleAddCtrl', function ($scope, $http, $state, power) {
        var self = this;
        self.init = function () {
            $scope.data = {
                powers: [
                ],
                rolename: ''
            };
            self.load();
        };
        $scope.m = [];
        $scope.checked = [];
        // self.selectAll = function () {
        //     if ($scope.select_all) {
        //         $scope.checked = [];
        //         angular.forEach($scope.powers, function (i) {
        //             i.checked = true;
        //             $scope.checked.push(i);
        //         });
        //     } else {
        //         angular.forEach($scope.powers, function (i) {
        //             i.checked = false;
        //             $scope.checked = [];
        //         });
        //     }
        //     console.log($scope.checked);
        // };
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
            var url = 'http://127.0.0.1:8080/Role/';
            $http.post(url, $scope.data)
                .then(function success(response) {
                    console.log(response);
                    $state.transitionTo('role.index', {}, {reload: true});

                }, function error(response) {
                    console.log('请求角色列表发生错误', response);
                });
        };

        self.init();
        $scope.selectOne = self.selectOne;
        // $scope.selectAll = self.selectAll;
        $scope.submit = self.submit;
    });
