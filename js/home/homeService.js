var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

	this.getJazzData = function() {
		return teamService.getTeamData("utahjazz");
	}

});
