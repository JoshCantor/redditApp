var app = angular.module("redditApp", ['angularMoment', 'ngAnimate']);

app.controller("AppController", function($scope) {
	$scope.post = {};
	$scope.displayInitialPost = false;
	$scope.currentPosts = [];
	$scope.post.votes = 0;
	$scope.addPost = false;
	$scope.post.commentNumber = 0;
	$scope.sortValue = "date";

	$scope.toggleNewPost = function() {
		$scope.addPost = !$scope.addPost;	
	}
	
	$scope.submitPost = function(postForm) {
		$scope.addPost = false;
		$scope.displayInitialPost = true;
		$scope.post.currentComments = [];
		
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
		$scope.post = {
			comment: {}
		};
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

	$scope.toggleCommentForm = function(n) {
		n.addComment = !n.addComment;
		n.displayComments = false;
	}

	$scope.submitComment = function(n) {
		var commentCopy = {};
		for (key in n.comment) {
			commentCopy[key] = n.comment[key];
		}
		n.currentComments.push(commentCopy);
		n.addComment = false;
		n.displayComments = true;
		debugger
		n.comment = {};
	}

	$scope.toggleComments = function(n) {
		n.displayComments = !n.displayComments;
	}

	$scope.getCommentCount = function(thisPost) {
		return thisPost.currentComments.length;
	}

	$scope.resetSortValue = function(sortValue) {
		console.log(sortValue);
		$scope.sortValue = sortValue;
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