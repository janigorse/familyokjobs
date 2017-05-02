'use strict';

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularMoment',
    'firebase',
    'ui.bootstrap',
    'angulartics', 
    'angulartics.google.analytics',
    'angular-loading-bar',
    'angularMoment',
    'angularTrix'
  ])
  .config(function ($routeProvider) {
     // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAzDtIHfCTBqvbuqQniyPRXxpq3qm_Ig-U",
      authDomain: "familyokjobs.firebaseapp.com",
      databaseURL: "https://familyokjobs.firebaseio.com",
      projectId: "familyokjobs",
      storageBucket: "",
      messagingSenderId: "196222131841"
    };

    
    firebase.initializeApp(config);
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'PostJobCtrl',
        controllerAs: 'post'
      })
      .when('/view/:jobId', {
        templateUrl: 'views/job.html',
        controller: 'JobCtrl',
        controllerAs: 'view'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeBar = false;
    cfpLoadingBarProvider.latencyThreshold = 50;
  }])
  .run(['$rootScope', '$location', function($rootScope, $location){
    $rootScope.$on('$routeChangeError', function(event, next, previous, error){
      if (error === "AUTH_REQUIRED") {
        console.log("auth req");
        $location.path("/login");
      }
    });

    $rootScope.$on('jobIsInPreviewMode', function(event, data) {
      $rootScope.jobPreview = data;
    });
  }])
  
  ;
