'use strict';
angular
    .module('demoApp', ['ngRoute', 'demoApp.controllers'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: '/demoApp/templates/home.html', controller: 'HomeController'});
        $routeProvider.otherwise({redirectTo: '/'});
    })
    .config((function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    }));
