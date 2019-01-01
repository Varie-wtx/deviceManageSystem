'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('LoginCtrl', function ($scope, user, $location) {
        var self = this;

        self.init = function () {
            $scope.user = {
                username: '',
                password: ''
            };
        };

        self.submit = function () {
            user.login($scope.user)
                .then(function success() {
                    console.log("success");
                    $location.url('/main');
                }, function error(response) {
                    console.log('error', response);
                });
        };

        self.init();
        $scope.submit = self.submit;

    });
