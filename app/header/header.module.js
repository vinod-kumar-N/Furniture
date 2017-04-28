define(['ngAMD','angular-route'], function(ngAMD){
    var myHeader = angular.module("myHeader", ['ngRoute']);

    myHeader.component('myHeader',{
         controller: function(){
         },
         templateUrl: 'app/header/header.html'
     })
  return myHeader;
});