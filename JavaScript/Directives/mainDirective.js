require(['Modules/myApp'], function(myApp) {
  myApp.directive('mainDirective', mainDirective);
  mainDirective.$inject = [];

  function mainDirective() {
    var ddo = {
      templateUrl: "JavaScript/templates/loginPage.html",
      scope: {
        myName: "@myName",
        myPosition: '=myPosition',
        clearValue: '&myClear'
      },
      controller: 'mainDirectiveController',
      link: mainDirectiveLink,
      transclude: true
    }
    return ddo;
  }

  function mainDirectiveLink(scope, element, attrs, controller) {
    console.log(element);
  }
})
