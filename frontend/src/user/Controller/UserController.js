angular.module("LeHoiViet.User", [])
	.controller("UserCtrl", function($scope, $http, EndPointConfigService){
		$scope.singup = function(){
			var MODEL = "users/signup";
			var user = {};
			user.email = $scope.email;
			user.password = $scope.password;
			user.firstName = $scope.firstname;
			user.lastName = $scope.lastname;
			user.gender = $scope.gender;

			$http({
				method: "POST",
				url: EndPointConfigService.getUrl(MODEL),
				data: user
			}).then(function successCallback(response){
				var data = response.data;
				if(data.success == true){
					
				};
			}, function errorCallback(response){
				
			}); 
		};
	});