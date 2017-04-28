'use strict';

angular.module('app')
  .controller('PostJobCtrl', function ($scope, $rootScope, $firebaseObject, $location, $route, $routeParams, moment, firebase, countryService, stateService) {

    $scope.jobPreview = false;
    $rootScope.$emit('jobIsInPreviewMode', true);

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
              city: job.city,
              state: job.state ? job.state.name : '',
              country: job.country.name,
              remote: job.remote ? 'remote' : '',
              flexitime: job.flexitime ? 'flexitime' : '',
              parental: job.parental ? 'parental' : '',
              parentalMonths: job.parental ? job.parental : 0,
              salaryFrom: job.salaryFrom,
              salaryTo: job.salaryTo,
              description: job.description,
              jobContactEmail: job.jobContactEmail,
              postedDate: moment().format('YYYY-MM-DD HH:mm'),
              companyName: job.companyName,
              companyUrl: job.companyUrl,
              companyEmail: job.companyEmail
          });
    }

    var fireRef = firebase.database();

    $scope.countries = countryService.getCountries();
    $scope.states = stateService.getStates();
    /*
    $scope.job = {
        title: 'javascript engineer',
        city: 'san francisco',
        state: null,
        country: null,
        remote: true,
        salaryFrom: '80.000',
        salaryTo: '100.0000',
        description: 'A deep love for building user interfaces with JavaScript. The energy, warmth, helpfulness, and intelligence to get things done and thrive in a fast-paced startup environment.',
        jobContactEmail: 'job@company.com',
        postedDate: moment().format('YYYY-MM-DD HH:mm'),
        companyName: 'Test Company Ltd.',
        companyUrl: 'www.testcompany.com',
        companyEmail: 'info@company.com'
      };
      */
  });
