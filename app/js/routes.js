(function () {
    'use strict';
    define(['angular', 'app'], function (angular, app) {
        return app.config(['$routeProvider', '$locationProvider',
            function ($routeProvider, $locationProvider) {
                //	$locationProvider.html5Mode(true);
                $routeProvider.when('/', {
                    templateUrl: 'app/features/home/views/home.html',
                    controller: 'homeCtrl'
                });

                $routeProvider.otherwise({
                    redirectTo: '/'
                });
            }
        ]);
    });
})();