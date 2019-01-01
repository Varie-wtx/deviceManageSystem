'use strict';

/**
 * @ngdoc service
 * @name webappApp.role
 * @description
 * # role
 * Service in the webappApp.
 */
angular.module('webappApp')
    .service('role', function ($http) {
        var self = this;
        // 获取所有的用户信息
        self.getAllRoles = function (callback) {
            var url = 'http://127.0.0.1:8080/Role/';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error(response) {
                    console.log('error', response);
                });
        };
        self.delete = function (object, callback) {
            var url = 'http://127.0.0.1:8080/Role/' + object.id;
            console.log(object.id)
            $http.delete(url)
                .then(function success() {
                    if (callback) {
                        callback();
                    }
                }, function error(response) {
                    console.log('error', response);
                });
        };
        return {
            getAllRoles: self.getAllRoles,
            delete: self.delete,
        };
    });
