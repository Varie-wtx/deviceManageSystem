'use strict';

/**
 * @ngdoc service
 * @name webappApp.student
 * @description
 * # student
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('student', function ($http) {
      var self = this;
      // 获取所有的用户信息
      self.getAllStudents = function (callback) {
          var url = 'http://127.0.0.1:8080/Student/';
          $http.get(url)
              .then(function success(response) {
                  if(callback){
                      callback(response.data);
                  }
              }, function error(response) {
                  console.log('error', response);
              });
      };
      return {
          getAllStudents: self.getAllStudents,
      };
  });
