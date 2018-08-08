angular.module('appRoutes', []).config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'assets/pages/home.html',
            controller: 'HomeController'
        })
        .when('/assets', {
            templateUrl: 'assets/pages/assets.html',
            controller: 'AssetsController'
        })
        .when('/user_activity', {
            templateUrl: 'assets/pages/user.html',
            controller: 'UserController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);