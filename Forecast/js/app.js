var app = angular.module("ForecastApp", []); /* New module called ForecastApp */

app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  forecast.success(function(data) {
    $scope.sevenDay = data;


  });


}]);
