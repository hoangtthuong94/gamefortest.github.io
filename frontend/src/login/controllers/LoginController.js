angular.module('LeHoiViet.Login', ['ngCookies'])
	.controller('LoginCtrl',
		function($rootScope, $scope, $cookies,  LoginService){
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
						 console.log($cookies.get('connect.sid'));
						 $rootScope.userProfile ={};
						 $rootScope.userProfile.firstName = response.data.user.firstName;
						 $rootScope.userProfile.lastName = response.data.user.lastName;
						 $rootScope.userProfile.avatar = "http://lehoiviet.herokuapp.com" + response.data.user.avatar;
						 $rootScope.userProfile.gender = response.data.user.gender;
						 
					}
				});
			};

			$scope.getLoginState = function(){
				return loginState;
			};
		});