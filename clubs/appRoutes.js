// public/js/appRoutes.js

angular.module('appRoutes', [])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/clublist.html", controller: "CSController"
		})
		.when("/:id", {
			templateUrl: "views/clubdetail.html", controller: "CSController"
		})
		.otherwise({redirectTo: "/" });
}]);

