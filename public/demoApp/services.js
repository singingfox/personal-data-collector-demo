"use strict";

angular
    .module("demoApp.services", [])
    .factory("States", function() {
        return [ 'AZ', 'CA', 'DE', 'MD', 'NY', 'TX' ];
    });
