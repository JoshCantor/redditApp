var app = angular.module("redditApp", []);

app.controller("AppController", function($scope) {
	$scope.post = {};
	$scope.addPost = false;
	$scope.newPost = function() {
		$scope.addPost = true;

	}
	$scope.displayInitialPost = false;
	$scope.currentPosts = [];
	$scope.submitPost = function() {
		$scope.addPost = false;
		$scope.displayInitialPost = true;
		$scope.currentPosts.push($scope.post);
		console.log($scope.currentPosts);
	}
});