// public/js/controllers/controller.js

angular.module('ClubSearch.controllers', []).

controller('CSController', function($scope, $routeParams) {
	$scope.id = $routeParams.id;
	$scope.clubs = [
		{
		id: 1,
		code: "B711",
		name: "Mohegan Sun",
		phonenumber: "1234" 
		},
		{
		id: 2,
		code: "B700",
		name: "Foxwoods",
		phonenumber: "3462" 
		},
		{
		id: 3,
		code: "N14",
		name: "Borgata",
		phonenumber: "9876" 
		},
		{
		id: 4,
		code: "N1",
		name: "Resorts",
		phonenumber: "6123" 
		},
	]
});
