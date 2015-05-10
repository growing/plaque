var app = angular.module('MyApp', ['ngRoute']);

(function () {
  'use strict';

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'about/about.html',
        controller: 'aboutController'
      })
      .otherwise({  redirectTo: '/about' });
  });

})();
