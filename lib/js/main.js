require.config({
    baseUrl: 'lib/js',
    paths: {
        'angular': 'angular.min',
        'angular-route': 'angular-route',
        'location': 'location',
        'ngAMD': 'angularAMD',
        '$': 'jquery-3.2.0.min',
        'boot': 'bootstrap.min',
        'header':'../../app/header/header.module',
    },
    shim: {'angularAMD': ['angular'],
           'angular-route': ['angular']
          },
    deps: ['app']
});