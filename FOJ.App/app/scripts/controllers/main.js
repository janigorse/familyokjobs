'use strict';

angular.module('app')
  .controller('MainCtrl', function ($scope, $firebaseArray, $location, $rootScope) {
	  $rootScope.$emit('jobIsInPreviewMode', false);
    var jobs = firebase.database().ref().child("jobs");
    $scope.jobs = null;
    $firebaseArray(jobs).$loaded(function(result) {
      $scope.jobs = result;
    });
    
    $scope.viewJob = function(jobId) {
      $location.path(/view/ + jobId);
    };

    

  });
