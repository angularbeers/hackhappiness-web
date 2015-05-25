(function () {
    'use strict';

    define(['angular', 'services'], function (angular) {
        return angular.module('hackhappiness.controllers', [])

            // COMMON
            .controller('headerCtrl', ['$scope', '$injector',
                function ($scope, $injector) {
                    require(['../features/common/controllers/headerCtrl'], function (headerCtrl) {
                        $injector.invoke(headerCtrl, this, {
                            '$scope': $scope
                        });
                    });
                }
            ])
            .controller('footerCtrl', ['$scope', '$injector',
                function ($scope, $injector) {
                    require(['../features/common/controllers/footerCtrl'], function (footerCtrl) {
                        $injector.invoke(footerCtrl, this, {
                            '$scope': $scope
                        });
                    });
                }
            ])

            // HOME
            .controller('homeCtrl', ['$scope', '$injector', '$rootScope',
                function ($scope, $injector, $rootScope) {
                    $rootScope.stylePath = 'home';
                    require(['../features/home/controllers/homeCtrl'], function (homeCtrl) {
                        $injector.invoke(homeCtrl, this, {
                            '$scope': $scope
                        });
                    });
                }
            ])

    });
})();