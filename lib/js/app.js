define(['ngAMD','angular-route','header'], function(ngAMD){
    var app = angular.module("webapp", ['header','ngRoute']);
    app.config(function ($locationProvider,$routeProvider) {
    $routeProvider
    .when("home", ngAMD.route({
        templateUrl: 'app/views/home.html'
    }))
    //.otherwise({redirectTo: "app/views/home"});
    $locationProvider.html5Mode(true).hashPrefix('*');
  });
  ngAMD.bootstrap(app);
  
  return app;

});