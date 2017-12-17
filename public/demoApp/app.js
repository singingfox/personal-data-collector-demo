'use strict';
angular
    .module('demoApp', ['ngRoute', 'ngMessages', 'ngAnimate', 'demoApp.controllers', 'demoApp.services'])
    .config(function($routeProvider) {
        $routeProvider.when('/', {templateUrl: '/demoApp/templates/home.html', controller: 'HomeController'});
        $routeProvider.otherwise({redirectTo: '/'});
    })
    .config((function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    }));

