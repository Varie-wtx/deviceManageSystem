'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherIndexCtrl
 * @description
 * # TeacherIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('TeacherIndexCtrl', function ($scope, $http, $state) {
        var self = this;
        self.init = function () {
            var url = 'http://127.0.0.1:8080/Teacher/';
            $http.get(url)
                .then(function success(response) {
                    $scope.lists = response.data;
                    console.log("success");
                }, function error(response) {
                    console.log('error', response);
                });
        };

        self.delete = function (teacher) {
            var url = 'http://127.0.0.1:8080/Teacher/' + teacher.id;
            $http.delete(url)
                .then(function success() {
                    console.log("删除失败");
                    $state.reload();
                }, function error(response) {
                    console.log('error',response);
                });
        };

        self.init();
        $scope.delete = self.delete;
    });
