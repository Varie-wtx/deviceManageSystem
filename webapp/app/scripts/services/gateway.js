'use strict';

/**
 * @ngdoc service
 * @name webappApp.gateway
 * @description
 * # gateway
 * Service in the webappApp.
 */
angular.module('webappApp')
  .service('gateway', function ($http) {
      var self = this;
      // 获取所有的网关类型
      self.getAllGateTypes = function (callback) {
          var url = 'http://127.0.0.1:8080/GateWayType/';
          $http.get(url)
              .then(function success(response) {
                  if (callback) {
                      callback(response.data);
                  }
              }, function error(response) {
                  console.log('error', response);
              });
      };
      // 获取所有的网关
      self.getAllGateways = function (callback) {
          var url = 'http://127.0.0.1:8080/Gateway/';
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
          getAllGateTypes: self.getAllGateTypes,
          getAllGateways: self.getAllGateways
      };
  });
