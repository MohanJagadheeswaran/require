require(['Modules/myApp'], function(myApp) {
  myApp.service('mainService', mainService);
  mainService.$inject = ['$http'];

  function mainService($http) {
    var self = this;
    self.getJson = function() {
      return $http.get('https://api.myjson.com/bins/1e97ol');
    }
  }
})
