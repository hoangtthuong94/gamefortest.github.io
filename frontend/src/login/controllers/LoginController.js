angular.module('LeHoiViet.Login', [])
	.controller('LoginCtrl',
		function($scope, LoginService){
			$scope.login = function(){
				LoginService.login($scope.email, $scope.password, function(response){alert("Login")});
			};
		});