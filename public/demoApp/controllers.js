'use strict';

angular.module('demoApp.controllers', [])
    .controller('HomeController', function($scope, $http, States) {


    })
    .controller('OldHomeController', function($scope, $http, States) {
        $scope.states = States;
        $scope.report = { message: '', mostRecentAddress: {}, count: 0 };

        /**
         *  For the basic modal implemented here, when modal is invoked upon submission event,
         *  it can not be closed for some reason. When modal is invoked upon button click event,
         *  it can be closed as expected.
         *
         *  Before this is figured out, use button ng-click event to invoke modal, and use form
         *  submission event to do the rest:
         *
         *  1.  call API endpoint
         *  2.  reset form ($setPristine)
         *  3.  present returned data
         */
        $scope.onSubmit = function(dataForm) {
            var data = {
                name: dataForm.name.$modelValue,
                street: dataForm.street.$modelValue,
                city: dataForm.city.$modelValue,
                state: dataForm.state.$modelValue,
                zipcode: dataForm.zipcode.$modelValue
            };

            // clear data
            $scope.address = {};
            // reset form states
            dataForm.$setPristine();

            // report.message is used to toggle the two sections in the main content area of modal
            $scope.report.message = 'Submitting address data ... ';

            $http.post('/data', data)
                .then(
                    function(response) {
                        var data = response.data;

                        if(data.success === true) {
                            $scope.report.message = '';

                            $scope.report = {
                                message: '',
                                count: data.count,
                                mostRecentAddress: {
                                    name: data.mostRecent.name,
                                    street: data.mostRecent.street,
                                    city: data.mostRecent.street,
                                    state: data.mostRecent.state,
                                    zipcode: data.mostRecent.zipcode
                                }
                            };
                        }
                        else {
                            $scope.report.message = 'Saving address failed due to ' + data.reason;
                        }
                    },
                    function(error) {
                        // NOT TESTED
                        $scope.report.message = error;
                    });
        };

        $scope.hideModal = function() {
            $scope.report.message = '';
            $scope.isModalShown = false;
        };

        $scope.showModal = function() {
            $scope.isModalShown= true;
        };

        $scope.hideModal();

    });
