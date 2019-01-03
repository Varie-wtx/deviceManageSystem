'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:GatewayAddCtrl
 * @description
 * # GatewayAddCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('GatewayAddCtrl', function ($scope, $http, $state) {
        var self = this;

        self.init = function () {
            $scope.data = {
                name: '',
                gatewayType:{},
                macAddress: '',
                status: '',
                lixianJudgeTime: '',
                onlineDescription: ''
            };
        };


        self.submit = function () {
            var url = 'http://127.0.0.1:8080/Gateway/';
            $http.post(url, $scope.data)
                .then(function success(response) {
                    console.log(response);
                    $state.transitionTo('gateway.index', {}, {reload: true});

                }, function error(response) {
                    console.log('请求网关列表发生错误', response);
                });
        };


        self.init();
        $scope.submit = self.submit;
    });
