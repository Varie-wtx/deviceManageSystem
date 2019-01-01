'use strict';

/**
 * @ngdoc service
 * @name webappApp.power
 * @description
 * # power
 * Service in the webappApp.
 */
angular.module('webappApp')
    .service('power', function ($http) {
        var self = this;
        // 获取所有的用户信息
        self.getAllPowers = function (callback) {
            var url = 'http://127.0.0.1:8080/Power/';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error(response) {
                    console.log('error', response);
                });
        };

        return {
            getAllPowers: self.getAllPowers
        };
    });
