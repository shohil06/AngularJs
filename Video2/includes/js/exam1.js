var app1 = angular.module('app1', []);
app1.controller('ctrl1' , function($scope){
  $scope.first = 1;
  $scope.second = 1;

  $scope.update1Value = function(){
    $scope.calculation123 = $scope.first + ' + ' + $scope.second + " = " + ((+$scope.first) + (+$scope.second));
  };
});

// var app2 = angular.module('app2',[]);
app1.controller('ctrl2' , function($scope){
  $scope.randomNum1 = Math.floor((Math.random() * 10) + 1);
  $scope.ramdomNum2 = Math.floor((Math.random() * 10) + 1);
});

app1.controller('badCtrl' , function($scope){
  var badFeelings = ["Disregarded","Unimportant","Rejected","Powerless"];
  $scope.bad = badFeelings[ Math.floor( (Math.random() * 4) ) ];
});

app1.controller('goodCtrl' , function($scope){
  var goodFeelings = ["Pleasure" , "Awesome" , "Lovable" , "Inner-Peace"];
  $scope.good = goodFeelings[ Math.floor( (Math.random() * 4) ) ];
});

app1.controller('gListCtrl' , function($scope){
  $scope.groceries = [{name: "Potatoes" ,value: "True"},{name: "Murkh_Random" ,value: "True"},{name: "Tomatoes" ,value: "True"},{name: "Garlic Bread" ,value: "True"}];
  $scope.getList = function(){
    return $scope.showList ? "unOrderedList.html" : "orderedList.html";
  };
});

app1.controller('evntCtrl' , function($scope){
  $scope.disableButton=true;
  $scope.dayTimeButton=true;
  $scope.capitals=[{"city": 'Kota' , "state": 'Rajasthan'},{"city": 'Hyderabad' , state: 'Andhra Pradesh'},{"city": 'Chennai' , state: 'Tamil Nadu'}];
});


/*-------------------------
  app2 starts from here
-------------------------*/
var app2=angular.module('app2' , []);
app2.controller('gListCtrl' , function($scope){
  $scope.groceries = [{name: "Potatoes" ,value: "True"},{name: "Murkh_Random" ,value: "True"},{name: "Tomatoes" ,value: "True"},{name: "Garlic Bread" ,value: "True"}];
  $scope.addItem = function(newItem){
    if(!(newItem === undefined || newItem === ""))
    {
      $scope.groceries.push({name: newItem , purchased: false});
      $scope.missingNewItemError = "";
    }
    else
    {
      $scope.missingNewItemError = "Please Enter an Item";
    }
  };
});

app2.controller('userCtrl' , function($scope){

});

app2.controller('heroCtrl' , function($scope , $rootScope){
  $scope.hero=[{realName : "Bruce Wayne" , heroName : "Batman"} , {realName : "Clark Kent" , heroName : "Superman"}];

  $scope.getHeroData = function(){
    heroSearch($scope.heroName);
  };

  function heroSearch(name)
  {
      $scope.heroData = "Not Found";
      for(var i=0 ; i<$scope.hero.length ; i++)
      {
        if($scope.hero[i].heroName === name || $scope.hero[i].realName.indexOf(name)!=-1)
        {
          $scope.heroData = $scope.hero[i].realName + "is" + $scope.hero[i].heroName;
        }
      }
  }

  $scope.$on("heroUpdated",function(event , args){
    $scope.hero.push({realName: args.realName , heroName: args.heroName});
  });


$scope.addHeroData = function(realName , heroName){
  $rootScope.$broadcast("heroUpdated" , {realName: realName , heroName: heroName});
  $scope.hero.push({realName: args.realName , heroName: args.heroName});

};
});
