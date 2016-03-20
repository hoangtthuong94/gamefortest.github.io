angular.module("LeHoiViet.Festival", ["LeHoiViet.Common"])
	.controller("FestivalCtrl", function($scope, $http, EndPointConfigService){

		$scope.getUpcommingFestival = function(){
			var MODEL = "posts/getLimitPost";
			$http({
				  method: "GET",
				  url: EndPointConfigService.getUrl(MODEL)
				}).then(function successCallback(response) {
					$("#upcomingFestivalLoader").hide();
					var data = response.data;
					if(data.success == true){
						$scope.upcommingFestivalData = data.data;
					};
				  }, function errorCallback(response) {
				  	$scope.upcommingFestivalData = null;
				  });
		};		
	});