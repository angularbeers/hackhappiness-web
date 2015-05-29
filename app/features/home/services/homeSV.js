(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('hackhappiness.services.homeSV', [])
            .service('homeSV', function ($http) {

                this.events = function (onSuccess, onError) {
                    $http({
                        url: utils.getURL('events'),
                        method: 'GET',
                        timeout: utils.webServicesTimeout
                    }).success(function (data) {
                        onSuccess(data);

                    }).error(function (errMsg) {
                        onError(errMsg);
                    });
                };

                this.loadHone = function (onSuccess, onError) {
                    $http({
                        url: utils.getURL('home'),
                        method: 'GET',
                        timeout: utils.webServicesTimeout
                    }).success(function (data) {
                        onSuccess(data);

                    }).error(function (errMsg) {
                        onError(errMsg);
                    });
                };

                this.people = function (onSuccess, onError) {
                    $http({
                        url: utils.getURL('people'),
                        method: 'GET',
                        timeout: utils.webServicesTimeout
                    }).success(function (data) {
                        onSuccess(data);

                    }).error(function (errMsg) {
                        onError(errMsg);
                    });
                };
            });
    });
}());