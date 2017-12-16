'use strict';

angular.module('demoApp.controllers', [])
    .controller('HomeController', function($scope, $http, States) {
        $scope.states = States;

        $scope.submit = function() {
            var data = { address: $scope.address, name: $scope.name };
            $http.post('/data', data)
                .then(
                    function(response) {
                        console.log(response);
                    },
                    function(error) {
                        console.log(Error);
                    });
        };
    });
