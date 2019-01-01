'use strict';

/**
 * @ngdoc service
 * @name webappApp.klass
 * @description
 * # klass
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('klass', function ($http) {
      var self = this;
      // 获取所有的用户信息
      self.getAllKlasses = function (callback) {
          var url = 'http://127.0.0.1:8080/Klass/';
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
          getAllKlasses: self.getAllKlasses,
      };
  });
