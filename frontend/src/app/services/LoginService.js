angular.module('LeHoiViet.Common')
	.service('LoginService',
		function($http, EndPointConfigService, CURRENT_BACKEND, $location){
			var service = this, 
			MODEL = 'users/login';

			service.saveUserAndProfile = function(profile, token){

			};

			service.login = function(email, password, callback){
				$http({
				  method: "POST",
				  url: EndPointConfigService.getUrl(MODEL),
				  data: {email: email, password: password}
				}).then(function successCallback(response) {
					callback(response);
				  }, function errorCallback(response) {
				  	callback(response);
				  });
			};
		});