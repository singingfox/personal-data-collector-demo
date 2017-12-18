"use strict";

angular
    .module("demoApp.services", [])
    .factory("States", function() {
        return [ 'AZ', 'CA', 'DE', 'MD', 'NY', 'TX' ];
    })
    .factory("Acknowledgement", function($http) {
        return {
            get: function () {
                return $http.get('/api/acknowledgement');
            }
        }
    });
