'use strict';

/**
 * @ngdoc filter
 * @name webappApp.filter:yunzhiSex
 * @function
 * @description
 * # yunzhiSex
 * Filter in the webappApp.
 */
angular.module('webappApp')
  .filter('yunzhiSex', function () {
      return function (input) {
          var output = '';
          if (input) {
              output = '男';
          } else {
              output = '女';
          }
          return output;
      };
  });
