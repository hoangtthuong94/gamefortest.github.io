angular.module("LeHoiViet.User", [])
	.controller("UserCtrl", function($scope, $http, EndPointConfigService){
		$scope.singup = function(){
			var MODEL = "users/singup";
			$http({
				method: "POST",
				url: EndPointConfigService.getUrl(MODEL)
			}).then(function successCallback)
		};
	});