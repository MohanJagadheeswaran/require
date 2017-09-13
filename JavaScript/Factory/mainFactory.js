require(['Modules/myApp','Services/mainService'], function(myApp) {
  myApp.service('mainFactory', mainFactory);
mainFactory.$inject = ['mainService'];
  function mainFactory() {

  }
})
