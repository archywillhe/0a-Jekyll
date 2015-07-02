'use strict';

function getDOM(){
  var DOMs = {};
  var events = {
    latestPost: function(){
      getDOM("NGVIEW").style.minHeight = getDOM("latestPost").offsetHeight + "px"
    }
  };
  var getDOM = function(DOMClassName){
      if(!DOMs.hasOwnProperty(DOMClassName)){
          DOMs[DOMClassName] = document.getElementsByClassName(DOMClassName)[0];
          if(events.hasOwnProperty(DOMClassName)){
            //call events
            events[DOMClassName]();
          }
      }
      return DOMs[DOMClassName];
  }
  return getDOM;
}

function getPosts(){
  var logNumbers = [2,3,2,1];
  var getPosts = function(jsonName,$scope,$http){
      $http.get('api/'+jsonName+'.json').success(function(data) {
        //console.log(data.posts);
          $scope.posts = data.posts;
          $scope.logNumber = function(a){ return logNumbers[a%4] };
      }).error(function(data, status, headers, config) {
        console.log("err",status);
      });
  }
  return getPosts;
}

function chooseViewChoice(){
  var chosen = undefined;
  var defaultClassName = "archyitem";
  var makeChosen = function(DOMClassName){
    chosen = { //default
        DOM: getDOM( DOMClassName ),
        className: DOMClassName
      }
  };
  var chooseViewChoice = function(DOMClassName){
    if(chosen === undefined)
      makeChosen("showLatestLog"); //default
    chosen.DOM.className = defaultClassName + " " + chosen.className;
    makeChosen(DOMClassName);
    chosen.DOM.className = defaultClassName + " chosen " + chosen.className;
  }
  return chooseViewChoice;
}

var getDOM = getDOM();
var getPosts = getPosts();
var chooseViewChoice = chooseViewChoice();

function IndexCtrl($scope, $http) {
    getDOM("latestPost").style.display = "block";
    getDOM("NGVIEW").style.display = "none";
    chooseViewChoice("showLatestLog");
}

function allDailyLogsCtrl ($scope, $http){
    getDOM("latestPost").style.display = "none";
    getDOM("NGVIEW").style.display = "block";
    getPosts("all-dailylogs",$scope, $http);
    chooseViewChoice("showAllLogs");
}

function logsFromThePastCtrl ($scope, $http){
    getDOM("latestPost").style.display = "none";
    getDOM("NGVIEW").style.display = "block";
    getPosts("logs-from-the-past",$scope, $http);
    chooseViewChoice("showLogsBefore");
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
