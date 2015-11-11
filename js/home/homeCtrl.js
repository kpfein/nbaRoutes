var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, homeService) {

	homeService.getJazzData()
		.then(function(result){
			$scope.jazzData = result;
		});


	console.log($scope.jazzData)
});
