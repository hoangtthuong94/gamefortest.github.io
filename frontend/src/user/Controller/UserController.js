angular.module("LeHoiViet.User", [])
	.controller("UserCtrl", function($scope, $http, EndPointConfigService){
		$scope.singup = function(){
			var MODEL = "users/singup";
			var user = {};
			user.email = $scope.email;
			user.password = $scope.password;
			user.firstname = $scope.firstname;
			user.lastname = $scope.lastname;
			user.gender = $scope.gender;

			$http({
				method: "POST",
				url: EndPointConfigService.getUrl(MODEL),
				data: {email: user.email},
				headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
			}).then(function successCallback(response){
				var data = response.data;
				if(data.success == true){
					
				};
			}, function errorCallback(response){
				
			}); 
		};
	});