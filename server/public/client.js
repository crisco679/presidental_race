var app = angular.module('presidentalApp', [])

app.controller('PresidentController', function($scope, $http){
  $scope.buttonClicked = false;
  $scope.message = "Presidental Race!";
  $scope.democrats = [];
  $scope.republicans = [];



  $scope.pickPresident = function(){
    $scope.myArray = $scope.democrats.concat($scope.republicans);
    console.log($scope.myArray);
    $scope.rand = Math.floor(Math.random() * $scope.myArray.length);
    console.log($scope.rand)
      if($scope.rand === 0){
        console.log("Bernie");
      }else if($scope.rand === 1){
        console.log("Hillary");
      }else if($scope.rand === 2){
        console.log("Donald");
      }else if($scope.rand === 3){
        console.log("Ted");
      }
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
  $http.get('/winner').then(function(response){
    $scope.winner = response.data;
  });

});
