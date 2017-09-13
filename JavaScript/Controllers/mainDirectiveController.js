require(['Modules/myApp'], function(myApp) {
  myApp.controller('mainDirectiveController', mainDirectiveController);
  mainDirectiveController.$inject = ['$scope'];

  function mainDirectiveController($scope) {

  }
})
