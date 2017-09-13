require.config({
  paths: {
    "angular": "../lib/angular.min",
    "uiRouter": "../lib/ui-router-1.0.3",
    "jquery": "../lib/jquery-3.2.1.min",
    "bootstarp": "../lib/js/bootstrap.min",
    "app": "Modules/myApp"
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'uiRouter': {
      deps: ['angular']
    },
    'bootstarp': ['jquery']
  },
  priority: ["angular", "uiRouter", 'domReady']
});
//window.name = "NG_DEFER_BOOTSTRAP!";
require(["Controllers/mainController", "Factory/mainFactory", "Directives/mainDirective", "Controllers/mainDirectiveController", 'Components/mainComponent'])
// require(["angular", "uiRouter", "myApp"], function(angular, uiRouter, myApp) {
//   var html = angular.element(document.getElementsByTagName('html')[0]);
//   angular.element().ready(function() {
//     angular.resumeBootstrap([myApp['name']]);
//   })
// })
