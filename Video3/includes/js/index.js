var app1 = angular.module('app1',[]);

app1.directive("jqlDirective" , function()
{
  return function(scope , element , attrs)
        {
          var players = element.children();
          var listOfPlayers = "";
          for(i=0;i<players.length; i++)
          {
            if(players.eq(i).text() == "Barry Bonds")
            {
              players.eq(i).css("color" , "red");
              players.eq(i).attr("number","25");
            }
            if(players.eq(i).text() == "Hank Aaron")
            {
              players.eq(i).addClass("thick");
            }

            listOfPlayers += players.eq(i).text() + ",";
// }
          // How to select an element by id with JQLite and add text
          angular.element(document.querySelector('#childrenList')).text(listOfPlayers);
        // }
          // Get the value of an attribute
          var barrysNum = angular.element(document.querySelector('#barry')).attr("number");
// }
          // Set the value of the attribute to the span
          angular.element(document.querySelector('#barrysNumber')).text(barrysNum);
// }
          // Remove a class
          // You can remove an attribute with removeAttr
          angular.element(document.querySelector('#hank')).removeClass("thick");
// }
          // Find out if an element has a class

          var isHankBold = angular.element(document.querySelector('#hank')).hasClass("thick");

          // Set the value in a span
          angular.element(document.querySelector('#hankBold')).text(isHankBold);

          // Get the value of a property
          // Set a property with .prop("name", "value")
          var barryID = angular.element(document.querySelector('#barry')).prop("id");

          // Set the value in a span
          angular.element(document.querySelector('#barryID')).text(barryID);
}      }
});
app1.controller("mainCtrl",function($scope){
  // Toggle a class on click
  $scope.unBold = function()
  {
    angular.element(document.querySelector('#hank')).toggleClass("thick");
    $scope.isHankBold = angular.element(document.querySelector('#hank')).hasClass("thick");
  }

});
