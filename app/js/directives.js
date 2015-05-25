(function () {
    'use strict';
    define(['angular', 'services'], function (angular, services) {

        angular.module('hackhappiness.directives', [])
            .directive('appVersion', ['version',
                function (version) {
                    return function (scope, elm, attrs) {
                        elm.text(version);
                    };
                }
            ])

            .directive('header', function () {
                return {
                    restrict: 'A',
                    controller: 'headerCtrl',
                    transclude: true,
                    templateUrl: 'app/features/common/views/header.html'
                };
            })

            .directive('footer', function() {
                return {
                    restrict: 'A',
                    transclude: true,
                    controller: 'footerCtrl',
                    templateUrl: 'app/features/common/views/footer.html'
                };
            })

    });
})();