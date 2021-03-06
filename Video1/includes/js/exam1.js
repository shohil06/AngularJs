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
  $scope.groceries = [{name: "Potatoes" ,value: "True"},{name: "Murkh_Random" ,value: "false"},{name: "Tomatoes" ,value: "True"},{name: "Garlic Bread" ,value: "True"}];
  $scope.getList = function(){
    return $scope.showList ? "unOrderedList.html" : "orderedList.html";
  };
});

app1.controller('evntCtrl' , function($scope){
  $scope.disableButton=true;
  $scope.dayTimeButton=true;
  $scope.capitals=[{"city": 'Kota' , "state": 'Rajasthan'},{"city": 'Hyderabad' , state: 'Andhra Pradesh'},{"city": 'Chennai' , state: 'Tamil Nadu'}];
});
