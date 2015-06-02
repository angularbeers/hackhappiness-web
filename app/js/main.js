(function() {
	'use strict';

	require.config({
		paths: {
			angular: '../bower_components_min/angular/angular',
			angularRoute: '../bower_components_min/angular-route/angular-route',
			angularAnimate: '../bower_components_min/angular-animate/angular-animate',
			angularResource: '../bower_components_min/angular-resource/angular-resource',
			angularWebStorage: '../bower_components_min/angular-webstorage/angular-webstorage',
			angularSanitize: '../bower_components_min/angular-sanitize/angular-sanitize',
			jquery: '../bower_components_min/jquery/jquery',
			videogular: '../bower_components_min/videogular/videogular',
			angularYT: '../bower_components_min/angular-youtube-mb/angular-youtube-embed',
			utils: 'utils/utils'
		},
		shim: {
			'angular': {
				deps: ['jquery'],
				'exports': 'angular'
			},
			'angularRoute': ['angular'],
			'angularAnimate': {
				deps: ['angular'],
				'exports': 'angularAnimate'
			},
			'angularResource': {
				deps: ['angular']
			},
			'angularWebStorage': {
				deps: ['angular']
			},
			'angularSanitize': {
				deps: ['angular']
			},
			'angularYT': {
				deps: ['angular']
			},
			'utils': {
				deps: ['angular', 'jquery']
			}
		},
		priority: [
			"jquery",
			"angular"
		]
	});

	window.name = "NG_DEFER_BOOTSTRAP!";

	require([
			'angular',
			'angularAnimate',
			'angularSanitize',
			'angularRoute',
			'angularResource',
			'angularWebStorage',
			'routes',
			'jquery',
			'angularYT',
			'app',
			'utils'
		],
		function(angular, angularAnimate, angularSanitize, angularRoute, angularResource, angularWebStorage, routes, jquery, angularYT, app, utils) {

			var $html = angular.element(document.getElementsByTagName('html')[0]);

			angular.element().ready(function() {
				angular.resumeBootstrap([app.name]);
			});
		});
}());