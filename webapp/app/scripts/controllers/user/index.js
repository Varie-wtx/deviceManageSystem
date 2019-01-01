'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:UserIndexCtrl
 * @description
 * # UserIndexCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
    .controller('UserIndexCtrl', function ($http, $scope, user) {
        var self = this;
        // 初始化
        self.init = function () {
            $scope.params = {page: 0, size: 10};
            self.load();
        };

        // 加载数据
        self.load = function () {
            user.page($scope.params, function (data) {
                $scope.data = data;
            });
        };

        // 分页时重新加载数据
        self.reloadByPage = function (size) {
            $scope.params.size = size;
            self.load();
        };

        // 进行每页大小
        self.reloadBySize = function(size) {
            $scope.params.size = size;
            self.load();
        };

        /**
         * 删除
         * @param  {[type]} object 要删除的对象
         * @return {}
         */
        self.delete = function (object) {
            // 触发后台的删除操作
            user.delete(object,function () {
               object._delete = true;
            });
        };

        self.init();
        $scope.delete = self.delete;
        $scope.reloadByPage = self.reloadByPage;
        $scope.reloadBySize = self.reloadBySize;

    });
