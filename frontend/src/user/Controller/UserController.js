var app = angular.module("LeHoiViet.User", [])
	app.controller("UserCtrl", function($scope, $http, EndPointConfigService){
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
				$('#register').modal('hide');
				$('#dangnhap').modal('show');
				var data = response.data;
				if(data.success == true){
					
				};
			}, function errorCallback(response){
				
			}); 
		};
	});

	app.directive('validPasswordC', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.resgiterFrom.password.$viewValue
                ctrl.$setValidity('noMatch', !noMatch)
            })
        }
    }
});