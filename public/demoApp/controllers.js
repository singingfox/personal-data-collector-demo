'use strict';

angular.module('demoApp.controllers', [])
    .controller('HomeController', function($scope, $http) {
        $scope.submit = function() {
            $http.post('/data')
                .then(
                    function(response) {
                        console.log(response);
                    },
                    function(error) {
                        console.log(Error);
                    });
        };
    });
