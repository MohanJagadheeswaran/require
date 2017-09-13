require(['Modules/myApp'], function(myApp) {
  myApp.controller('componentController', componentController);
  componentController.$inject = ['$scope', '$element'];

  function componentController($scope, $element) {
    this.$onInit = function() {
      console.log("In onit");
    }
    this.$onChanges = function(changedObj) {
      console.log(changedObj);
    }
    $scope.myPosition = this.myPosition;
    console.log($scope.myPosition);
    this.$postLink = function() {
      console.log(($element));
      $element.find("div").slideUp(900);
    }
    this.$doCheck = function() {

    }
  }
})
