require(["Modules/myApp", "Controllers/componentController"], function(myApp) {
  myApp.component("myComponent", {
    templateUrl: 'JavaScript/templates/componentTemplate.html',
    bindings: {
      'myPosition': '@'
    },
    controller: 'componentController'
  })
});
