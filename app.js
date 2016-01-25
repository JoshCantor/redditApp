var app = angular.module("redditApp", []);

app.controller("AppController", function($scope) {
	$scope.post = {};
	$scope.addPost = false;
	$scope.newPost = function() {
		$scope.addPost = true;

	}
	$scope.submitPost = function() {
		$scope.addPost = false;
	}

});