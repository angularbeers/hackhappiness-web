(function () {
    'use strict';

    define(['angular'], function (angular) {
        angular.module('hackhappiness.services.commonSV', [])
            .service('commonSV', function ($http) {

                this.sponsor = function (onSuccess, onError) {
                    $http({
                        url: utils.getURL('sponsor'),
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