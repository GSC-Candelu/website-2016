// create the module and name it
var gscApp = angular.module('gscApp', ['ngRoute']),
    _YEAR_ = '2016',
    _START_ = ['22', '4', _YEAR_],
    _END_ = ['8', '5', _YEAR_];


gscApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'pages/sagra.html',
        controller  : 'mainController'
    })

    // route for the programma page
    .when('/programma', {
        templateUrl : 'pages/programma.html',
        controller  : 'mainController'
    })

    // route for the mostra dei vini page
    .when('/mostra-dei-vini', {
        templateUrl : 'pages/vini.html',
        controller  : 'mainController'
    })
    // route for the eventi page
    .when('/eventi', {
        templateUrl : 'pages/eventi.html',
        controller  : 'mainController'
    })
    // route for the pitona page
    .when('/pitona', {
        templateUrl : 'pages/pitona.html',
        controller  : 'mainController'
    })
    // route for the pitona page
    .when('/foto', {
        templateUrl : 'pages/foto.html',
        controller  : 'mainController'
    })
    // route for the contatti page
    .when('/contatti', {
        templateUrl : 'pages/contatti.html',
        controller  : 'mainController'
    });
});

// create the controller and inject Angular's $scope
gscApp.controller('mainController', function($scope) {
   // main controller, creates context
   $scope.year = _YEAR_;
   $scope.sagra_start = _START_;
});

gscApp.controller('headActiveController', function($scope, $location) {
    // tells the nav bar which element is active
    $scope.isActive = function (viewLocation) {
        return (
            $location.path().indexOf(viewLocation) == 0 &&
            $location.path().length == viewLocation.length
        )
    };
});

gscApp.controller('countdownController', function($scope) {
    // countdown timer to the next event
    // if past _END_ date then show "next year"
});
