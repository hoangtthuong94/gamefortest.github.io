angular.module('LeHoiViet.Common')
	.constant('CURRENT_BACKEND', 'herokuapp')
	.service('EndPointConfigService', function($rootScope, CURRENT_BACKEND){
		var service = this,
			endpointMap = {
				herokuapp: {URI: 'http://lehoiviet.herokuapp.com', root: '/', format: '.json'}
			},
			currentEndPoint = endpointMap[CURRENT_BACKEND],
			userId = null,
			backend = CURRENT_BACKEND;

		service.getUrl = function(model){
			return currentEndPoint.URI + currentEndPoint.root + model;
		};

		service.getCurrentBackend = function(){
			return backend;
		};

		service.getCurrentURI = function(){
			return currentEndPoint.URI;
		};
	});;