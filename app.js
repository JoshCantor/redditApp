var app = angular.module("redditApp", ['angularMoment']);

app.controller("AppController", function($scope) {
	$scope.post = {};
	$scope.displayInitialPost = false;
	$scope.currentPosts = [];
	$scope.post.votes = 0;
	$scope.post.addComment = false;
	$scope.post.comment = {};
	$scope.post.currentComments = [];
	$scope.post.displayComments = false;
	$scope.addPost = false;
	$scope.post.commentNumber = 0

	$scope.toggleNewPost = function() {
		$scope.addPost = !$scope.addPost;	
	}
	
	$scope.submitPost = function(postForm) {
		$scope.addPost = false;
		$scope.displayInitialPost = true;
		
		var momentDate = moment(),
			rawDate = Date.now();
		$scope.post.date = momentDate;
		$scope.post.rawDate = rawDate;
		
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
		$scope.displayComments = false;
	}

	$scope.submitComment = function(postForm) {
		var commentCopy = {};
		for (key in $scope.post.comment) {
			commentCopy[key] = $scope.post.comment[key];
		}
		$scope.post.currentComments.push(commentCopy);
		$scope.addComment = false;
		$scope.displayComments = true;
	}

	$scope.toggleComments = function() {
		$scope.displayComments = !$scope.displayComments;
	}

	$scope.getCommentCount = function(thisPost) {
		return thisPost.currentComments.length;
	}

	$scope.sortBy = function(sortValue) {
		if (sortValue === "vote") {
			return $scope.currentPosts.sort(function(a, b) {
				return b.votes - a.votes;
			});
		} else if (sortValue === "title") {
			return $scope.currentPosts.sort(function(a, b) {
				if (b.title < a.title) {
					return 1;
				}
				if (b.title > a.title) {
					return -1;
				}
				return 0;
			});
		} else {
			return $scope.currentPosts.sort(function(a, b) {
				console.log("a", a.rawDate, ",", "b", b.rawDate)
				return b.rawDate - a.rawDate;
			});
		}
	}
});