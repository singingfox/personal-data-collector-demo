"use strict";

angular
    .module("demoApp")
    .directive("acknowledgement", function() {
        return {
            templateUrl: '/demoApp/templates/acknowledgement.html'
        };
    })
    .directive("addressCollector", function() {
        return {
            templateUrl: '/demoApp/templates/addressDataForm.html'
        };
    });
