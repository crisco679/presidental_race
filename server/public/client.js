var app = angular.module('presidentalApp', [])

app.controller('PresidentController', function($scope, $http){
  $scope.buttonClicked = false;
  $scope.democrats = [];
  $scope.republicans = [];
  $scope.showWinner = false;
  



  $scope.pickPresident = function(){
    $scope.showWinner = true;
    $scope.myArray = $scope.democrats.concat($scope.republicans);
    console.log($scope.myArray);
    $scope.rand = Math.floor(Math.random() * $scope.myArray.length);
    console.log($scope.rand)
      $scope.winner=$scope.myArray[$scope.rand];
}
  $scope.generateCandidates = function(){

  $http.get('/democrats').then(function(response){
    $scope.buttonClicked = true;
    $scope.democrats = response.data;
    console.log(response);
  });
}
  $http.get('/republicans').then(function(response){
    $scope.republicans = response.data;
    console.log(response);
  });


});
