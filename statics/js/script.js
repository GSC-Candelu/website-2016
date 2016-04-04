// create the module and name it
var gscApp = angular.module('gscApp', ['ngRoute']),
    _STATICS_ROOT_ = 'statics/',
    _YEAR_ = '2016',
    _START_ = ['22', '4', _YEAR_],
    _END_ = ['8', '5', _YEAR_],

    _EVENTI_ = [
        'eventi-scopa-' + _YEAR_,
        'eventi-bocce-borella-' + _YEAR_,
        'eventi-moto-' + _YEAR_,
        'eventi-pedalata-' + _YEAR_
    ],

    _VINI_ = [ ],

    _PITONA_ = [
        'pitona-0',
        'pitona-1'
    ];


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
        templateUrl : 'pages/slider.html',
        controller  : 'eventiController'
    })
    // route for the pitona page
    .when('/pitona', {
        templateUrl : 'pages/slider.html',
        controller  : 'pitonaController'
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
   $scope.statics = _STATICS_ROOT_;
});

gscApp.controller('eventiController', function($scope) {
    $scope.items = _EVENTI_;
});

gscApp.controller('pitonaController', function($scope) {
    $scope.items = _PITONA_;
});

gscApp.controller('countdownController', function($scope) {
    // countdown timer to the next event
    // if past _END_ date then show "next year"
});


// directives
gscApp.directive('isActiveNav', [ '$location', function($location) {
    return {
        restrict: 'A',
            link: function(scope, element) {
                scope.location = $location;
                scope.$watch('location.path()', function(currentPath) {
                    if('/#' + currentPath === element[0].attributes['href'].nodeValue) {
                        element.parent().addClass('activeNav');
                    } else {
                        element.parent().removeClass('activeNav');
                    }
                });
            }
        };
    }]
);

gscApp.directive('carouselElement', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attribute) {
            debugger;
            element.bxSlider({
                buildPager: function(slideIndex) {
                    return '<img src="' + scope.statics + 'images/' + scope.items[slideIndex] + '-t.jpg">';
                }
            });
        }
    }
});
