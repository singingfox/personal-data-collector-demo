'use strict';

angular.module('demoApp.controllers', [])
    .controller('HomeController', function($scope, $http, States, Acknowledgement) {
        $scope.address = {};
        $scope.states = States;
        $scope.modalMessage = '';
        /**
         *  submission event does the following:
         *
         *  1.  call API endpoint to save data
         *  2.  parse returned data and pass on to modal custom directive
         *  3.  reset form ($setPristine)
         */
        $scope.onSubmit = function(dataForm) {
            $scope.modalMessage = 'Submitting address data ...';

            $http.post('/api/data', $scope.address)
                .then(
                    function(response) {
                        var data = response.data;

                        if(data.success === true) {
                            $scope.modalMessage = '';

                            $scope.report = data;

                            Acknowledgement.get().then(function(response) {
                                $scope.modalAPI.setAcknowledgement(response.data);
                            });
                        }
                        else {
                            $scope.modalMessage = 'Saving address failed due to ' + data.reason;
                        }
                    },
                    function(error) {
                        // NOT TESTED
                        $scope.modalMessage = error;
                    });

            // clear data
            $scope.address = {name: '', street: '', city: '', state: '', zipcode: ''};
            // reset form states
            dataForm.$setPristine();
            // Show modal
            $scope.toggleModal();
        };

        $scope.toggleModal = function() {
            $scope.isModalShown = !$scope.isModalShown;
        };
    });
