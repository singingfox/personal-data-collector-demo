"use strict";

angular
    .module("demoApp")
    .directive("modal", function() {
        return {
            restrict: 'E',
            scope: {
                shown: '=',
                message: '=',
                report: '=',
                api: '='
            },
            replace: true, // Replace with template
            transclude: true, // To use custom content
            link: function(scope, element, attrs) {
                scope.hideModal = function() {
                    scope.shown = false;
                };

                scope.api = {
                    setAcknowledgement: function(content) {
                        scope.acknowledgementContent = content;
                    }
                };
            },

            templateUrl: '/demoApp/templates/modal.html'
        };
    });

