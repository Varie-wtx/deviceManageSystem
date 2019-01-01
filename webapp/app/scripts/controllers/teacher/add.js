'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TeacherAddCtrl
 * @description
 * # TeacherAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('TeacherAddCtrl', function ($scope, $http, $state) {
        var self = this;
        self.init = function () {
            $scope.data = {
                user:{},
                name: '',
                sex: 'true',
                email: ''
            };
        };

        self.submit = function () {
            // 把数据提交到/Teacher/这个地址，提交的方法为post
            var url = 'http://127.0.0.1:8080/Teacher/';
            $http.post(url, $scope.data)
                .then(function success() {
                    console.log('success');
                    $state.transitionTo('teacher.index', {}, {reload: true});
                }, function error() {
                    console.log('error');
                });
        };
        self.init();
        $scope.submit = self.submit;
    });
