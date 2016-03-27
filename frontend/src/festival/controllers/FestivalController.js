angular.module("LeHoiViet.Festival", ["LeHoiViet.Common"]);
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

		$scope.postFestival = function(){
			var MODEL = "posts/createPost";

			var content = {};
			content.title = $scope.title;
			content.description = $scope.description;
			content.content = $scope.content;
			content.timeBegin = $scope.timeBegin;
			content.timeEnd = $scope.timeEnd;
			content.website = $scope.website;
			content.emailAddress = $scope.emailAddress;
			content.phoneNumber = $scope.phoneNumber;
			content.typeEvent = $scope.typeEvent;
			content.detailsAddress = "Hồ Chí Minh";
			content.nearAddress = $scope.nearAddress;
			content.mainAdress = $scope.mainAdress;
			content.priceTicket = $scope.priceTicket;

			$http({})

		};		
	});


