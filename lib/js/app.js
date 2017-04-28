define(['ngAMD','angular-route'], function(ngAMD){
    var app = angular.module("webapp", ['ngRoute']);
    app.config(function ($locationProvider,$routeProvider) {
    $routeProvider
    .when("/home", ngAMD.route({
        templateUrl: 'app/views/home.html'
    }))
    .otherwise({redirectTo: "/app/views/home.html"});
    $locationProvider.html5Mode(true).hashPrefix('*');
  });
  ngAMD.bootstrap(app);
  
  return app;

});