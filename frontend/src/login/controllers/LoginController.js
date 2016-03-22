angular.module('LeHoiViet.Login', [])
	.controller('LoginCtrl',
		function($rootScope, $scope, LoginService){
			var loginState = 0;
			$scope.login = function(){
				LoginService.login($scope.email, $scope.password, function(response){
					if(response.status != 200){
						loginState = -1;
					}
					else{
						loginState = 0;
						 $('#dangnhap').modal('hide');

						 // assign user data
						 $rootScope.userProfile ={};
						 $rootScope.userProfile.firstName = response.data.firstName;
						 $rootScope.userProfile.lastName = response.data.lastName;
						 $rootScope.userProfile.avatar = "http://lehoiviet.herokuapp.com" + response.data.avatar;
						 $rootScope.userProfile.gender = response.data.gender;
					}
				});
			};

			$scope.getLoginState = function(){
				return loginState;
			};
		});