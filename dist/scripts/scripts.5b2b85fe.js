"use strict";angular.module("myappApp",["ngAnimate","ngMessages","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"FruitListCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("myappApp").controller("FruitListCtrl",["$scope",function(a){a.fruits=[{name:"Apple",snippet:"It is red"},{name:"Orange",snippet:"It is orange"},{name:"Blueberry",snippet:"It is blue"}]}]),angular.module("myappApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);