'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:TermAddCtrl
 * @description
 * # TermAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('TermAddCtrl', function ($scope,$http,$state) {
        var self = this;
        self.init = function () {
            $scope.data = {
                beginTime: '',
                name: '',
                endTime: ''
            };
        };

        self.submit = function () {
            // 把数据提交到/Term/这个地址，提交的方法为post
            var url = 'http://127.0.0.1:8080/Term/';
            $http.post(url, $scope.data)
                .then(function success() {
                    console.log('success');
                    $state.transitionTo('term.index', {}, {reload: true});
                }, function error() {
                    console.log('error');
                });
        };

        self.init();
        $scope.submit = self.submit;
    });
