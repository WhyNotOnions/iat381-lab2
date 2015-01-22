'use strict';

/**
  * @ngdoc function
 * @name myappApp.controller:FruitListCtrl
 * @description
 * # FruitListCtrl
 * Controller of the myappApp
  */
  
angular.module('myappApp')
	.controller('FruitListCtrl', function ($scope) {
	$scope.fruits = [
    {'name': 'Apple',
     'snippet': 'It is red'},
    {'name': 'Orange',
     'snippet': 'It is orange'},
    {'name': 'Blueberry',
     'snippet': 'It is blue'}
  ];
});