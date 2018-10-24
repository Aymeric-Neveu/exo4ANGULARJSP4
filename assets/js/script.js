var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
  $http.get("assets/js/voiture.json")
  .then(function(res){
    $scope.voitures=res.data;
  });
});
