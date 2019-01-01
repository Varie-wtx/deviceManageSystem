'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:yunzhiSize
 * @description
 * # yunzhiSize
 */
angular.module('webappApp')
  .directive('yunzhiSize', function () {
      return {
          scope: {
              ngModel: '=',
              reload: '='     // 触发加载的函数
          },
          templateUrl: 'views/directive/yunzhiSize.html',
          restrict: 'E'
      };
  });
