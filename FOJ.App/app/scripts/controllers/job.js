'use strict';

angular.module('app')
.controller('JobCtrl', function ($scope, $firebaseObject, $location, $routeParams, $window) {
    
    var jobId = $routeParams.jobId;
    var fireRef = firebase.database();
    $scope.job = $firebaseObject(fireRef.ref('jobs').child(jobId));
    $window.scrollTo(0, 0);
})

;