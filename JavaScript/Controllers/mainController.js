require(['Modules/myApp'], function(myApp) {
  myApp.controller("mainController", mainController);
  mainController.$inject = ['$scope', 'mainFactory', 'mainService']

  function mainController($scope, mainFactory, mainService) {
    $scope.name = "Jagadheeswaran Mohan";
    $scope.position = "captain";
    $scope.isValid = "Ama";
    $scope.output = "No Output!!";
    console.log(mainFactory);
    var getJson = mainService.getJson();
    getJson.then(function(response) {
        $scope.name = response.data[0].name;
      },
      function(error) {
        console.log(error);
      })
    $scope.clearValue = function() {
      $scope.name = "";
    }
  }
})
