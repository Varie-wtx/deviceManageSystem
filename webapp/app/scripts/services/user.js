'use strict';

/**
 * @ngdoc service
 * @name webappApp.user
 * @description
 * # user
 * Service in the webappApp.
 */
angular.module('webappApp')
    .service('user', function ($http) {
        var self = this;
        // 获取所有的用户信息
        self.getAllUsers = function (callback) {
            var url = 'http://127.0.0.1:8080/User/';
            $http.get(url)
                .then(function success(response) {
                    if(callback){
                        callback(response.data);
                    }
                }, function error(response) {
                    console.log('error', response);
                });
        };
        // 获取当前登陆的用户
        self.getCurrentLoginUser = function () {
        };
        self.page = function (params, callback) {
            var url = 'http://127.0.0.1:8080/User/page';
            // 使用参数发起请求
            $http.get(url, {params: params})
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                        console.log(response.data);
                    }
                }, function error(response) {
                    console.log('error', response);
                });
        };

        self.login = function (user) {
            var url = 'http://127.0.0.1:8080/User/login';
            console.log(user);
            return $http.post(url, user);
        };

        self.delete = function (object, callback) {
            var url = 'http://127.0.0.1:8080/User/' + object.id;
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
            delete: self.delete,
            login: self.login,
            page: self.page,
            getAllUsers: self.getAllUsers,
            getCurrentLoginUser: self.getCurrentLoginUser
        };
    });
