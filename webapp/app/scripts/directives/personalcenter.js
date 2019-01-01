'use strict';

/**
 * @ngdoc directive
 * @name webappApp.directive:personalCenter
 * @description
 * # personalCenter
 */
angular.module('webappApp')
  .directive('personalCenter', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the personalCenter directive');
      }
    };
  });
