'use strict';

/**
 * @ngdoc service
 * @name webappApp.teacher
 * @description
 * # teacher
 * Service in the webappApp.
 */
angular.module('webappApp')
    .service('teacher', function ($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var self = this;
        self.init = function () {

        };

        // 观察者
        self.observerCallbacks = [];

        // 注册观察者
        self.registerObserverCallback = function (callback) {
            self.observerCallbacks.push(callback);
        };

        // 注册观察者
        self.notifyObserver = function (currentLoginTeacher) {
            angular.forEach(self.observerCallbacks, function (callback) {
                callback(currentLoginTeacher);
            });
        };

        self.login = function (user) {
            var url = 'http://127.0.0.1:8080/Teacher/login';
            return $http.post(url, user);
        };

        self.logout = function (callback) {
            var url = 'http://127.0.0.1:8080/Teacher/logout';
            $http.post(url)
                .then(function success(response) {
                    self.notifyObserver({});
                    if (callback) {
                        callback(response);
                    }
                }, function error(response) {
                    console.error('logout error:', response);
                });
        };

        // 获取当前登录教师
        self.getCurrentLoginTeacher = function (callback) {
            var url = 'http://127.0.0.1:8080/Teacher/me';
            $http.get(url)
                .then(function success(response) {
                    self.notifyObserver(response.data);
                    if (callback) {
                        callback(response.data);
                    }
                }, function error(response) {
                    var teacher = {};
                    self.notifyObserver(teacher);
                    console.error('获取当前登录教师错误', response);
                });
        };

        /**
         * 获取所有的教师
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
        self.getAllTeachers = function (callback) {
            var url = 'http://127.0.0.1:8080/Teacher/';
            $http.get(url)
                .then(function success(response) {
                    if (callback) {
                        callback(response.data);
                    }
                }, function error() {
                    console.log('请求教师列表发生错误');
                });
        };

        self.init();

        return {
            getAllTeachers: self.getAllTeachers,
            login: self.login,
            logout: self.logout,
            getCurrentLoginTeacher: self.getCurrentLoginTeacher,
            registerObserverCallback: self.registerObserverCallback
        };

    });
