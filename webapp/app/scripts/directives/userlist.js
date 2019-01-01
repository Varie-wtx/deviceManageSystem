'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:userList
 * @description
 * # userList
 */
angular.module('webappApp')
    .directive('userList', function (user) {
        var self = {};
        self.getAllUsers = function($scope){
            user.getAllUsers(function(users) {
                $scope.users = users;
            });
        };

        return {
            templateUrl: 'views/directive/userList.html',
            restrict: 'E',
            link: function postLink($scope) {
                self.getAllUsers($scope);
            }
        };
    });
