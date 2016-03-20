angular.module("LeHoiViet.Review", [])
	.controller("ReviewCtrl", function($scope, $http, EndPointConfigService){
		$scope.getTopReviews = function(){
			var MODEL = "posts/getLimitPost";
			$http({
				method: "GET",
				url: EndPointConfigService.getUrl(MODEL)
			}).then(function successCallback(response){
				$("#topReviewsLoader").hide();
				var data = response.data;
				if(data.success == true){
					$scope.topReviewsData = data.data;
				};
			}, function errorCallback(response){
				$scope.topReviewsData = null;
			}); 
		};
	});