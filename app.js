var app = angular.module("redditApp", []);

app.controller("AppController", function($scope) {
	$scope.post = {};
	$scope.displayInitialPost = false;
	$scope.currentPosts = [];
	$scope.post.votes = 0;
	$scope.post.addComment = false;
	$scope.post.comment = {};
	$scope.post.currentComments = [];
	$scope.addPost = false;

	$scope.newPost = function() {
		$scope.addPost = true;
	}
	
	$scope.submitPost = function(postForm) {
		$scope.addPost = false;
		$scope.displayInitialPost = true;
		
		var postCopy = {};
		$scope.post.votes = 0;
		for (key in $scope.post) {
			postCopy[key] = $scope.post[key];
		}
		$scope.currentPosts.push(postCopy);
	}
	
	$scope.upVote = function(thisPost) {
		thisPost.votes += 1;
	}

	$scope.downVote = function(thisPost) {
		thisPost.votes -= 1;
	}

	$scope.isPositive = function(voteTotal) {
		return (voteTotal > 0);
	}

	$scope.isNegative = function(voteTotal) {
		return (voteTotal < 0);
	}

	$scope.isZero = function(voteTotal) {
		return (voteTotal === 0);
	}

	$scope.showCommentForm = function() {
		$scope.addComment = true;
	}

	$scope.submitComment = function(postForm) {

		$scope.addComment = false;
	}


});