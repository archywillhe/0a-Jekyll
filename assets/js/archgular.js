'use strict';

var DOMs = {};
var getDOM = function(DOMClassName){
    if(DOMs[DOMClassName] === undefined){
        DOMs[DOMClassName] = document.getElementsByClassName(DOMClassName)[0];
    }
    return DOMs[DOMClassName];
}
var getPosts = function(jsonName,$scope,$http){
    $http.get('api/'+jsonName+'.json').success(function(data) {
      console.log(data.posts);
        $scope.posts = data.posts;
        $scope.logNumber = function(a){ return (a%3)+2 };
    }).error(function(data, status, headers, config) {
      console.log("err",status);
    });
}


function IndexCtrl($scope, $http) {
    getDOM("latestPost").style.display = "block";
    getDOM("NGVIEW").style.display = "none";
}

function allDailyLogsCtrl ($scope, $http){
    getDOM("latestPost").style.display = "none";
    getDOM("NGVIEW").style.display = "block";
    getPosts("all-dailylogs",$scope, $http);
}

function logsFromThePastCtrl ($scope, $http){
    getDOM("latestPost").style.display = "none";
    getDOM("NGVIEW").style.display = "block";
    getPosts("logs-from-the-past",$scope, $http);
}


var hl = angular.module('homeLog',['ngRoute','ngSanitize']);
hl.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/latestLog', {
         controller: IndexCtrl,
         templateUrl: ""
      }).
      when('/all-dailylogs', {
        controller: allDailyLogsCtrl,
        templateUrl: 'partials/all-dailylogs.html',
      }).
      when('/logs-from-the-past', {
        controller: logsFromThePastCtrl,
        templateUrl: 'partials/logs-from-the-past.html',
      });
     $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);
