'use strict';

angular.module('app')
  .controller('PostJobCtrl', function ($scope, $rootScope, $firebaseObject, $location, $route, $routeParams, moment, firebase, countryService, stateService) {
    var fireRef = firebase.database();
    $scope.job = { postedDate: moment()};
    $scope.countries = countryService.getCountries();
    $scope.states = stateService.getStates();
    $scope.jobPreview = false;
    $rootScope.$emit('jobIsInPreviewMode', true);
    $scope.benefitCharsLeft = 50;
    $scope.calcCharsLeft = function(){
      $scope.benefitCharsLeft = 50 - $scope.job.otherBenefit.length;
    };

    $scope.postJob = function(){
      postJob($scope.job);
      $location.path('/');
    };

    $scope.previewAd = function() {
      $scope.jobPreview = true;
      $rootScope.$emit('jobIsInPreviewMode', true);
    };

    $scope.back = function() {
      $scope.jobPreview = false;
      $rootScope.$emit('jobIsInPreviewMode', true);
    };

    function postJob(job) {  
        fireRef.ref('jobs').push({
              title: job.title,
              city: job.city ? job.city : '',
              state: job.state ? job.state.name : '',
              country: job.country ? job.country.name : '',
              remote: job.remote ? 'remote' : '',
              flexitime: job.flexitime ? 'flexitime' : '',
              parental: job.parental ? 'parental' : '',
              parentalMonths: job.parental ? job.parental : 0,
              otherBenefit: job.otherBenefit ? job.otherBenefit : '',
              salaryFrom: job.salaryFrom ? job.salaryFrom : '',
              salaryTo: job.salaryTo ? job.salaryTo : '',
              description: job.description,
              jobContactEmail: job.jobContactEmail,
              postedDate: moment().format('YYYY-MM-DD HH:mm'),
              companyName: job.companyName,
              companyUrl: job.companyUrl,
              companyEmail: job.companyEmail ? job.companyEmail : ''
          });
    }
  });
