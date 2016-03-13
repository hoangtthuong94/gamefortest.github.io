angular.module('LeHoiViet.Common', [])
	.service('UserModel',
	function($http, EndPointConfigService){
		var service = this,
		MODEL = '/users/';

		service.all = function(){

		};

		service.fetch = function(user_id){

		};

		service.create = function(user){

		};

		service.update = function(user_id, user){

		};

		service.destroy = function(user_id){

		};
	});