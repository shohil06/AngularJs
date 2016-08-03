var app1 = angular.module('app1' , ['weatherFilters']);

app1.controller('mainCtrl' , function(){
  this.name = "Animal";
  this.sound = "Grrr";

  this.animalClick = function() {
    alert(this.name + " Says " + this.sound);
  };
});

app1.controller('dogCtrl' , function($scope , $controller){
  var childCtrl = this;
  childCtrl.child = $controller('mainCtrl' , {});
  childCtrl.child.name = "Dog";
  childCtrl.child.bark = "Wooof";
  $scope.sound = "Wooof";
  childCtrl.child.dogData = function(){
    alert(this.name + " Says " + $scope.sound + " and " + this.bark);
  };
});

app1.controller('Ctrl1', function($scope) {
  $scope.students =
  [ {name: "George Thomas", gpa: 3.5},
    {name: "Susy Smith", gpa: 3.6},
    {name: "Paul Marks", gpa: 3.2},
    {name: "Sue Edgar", gpa: 3.8} ] ;

  $scope.student = {
      gpas:[
        {name: "George Thomas", gpa: 3.5},
        {name: "Susy Smith", gpa: 3.6},
        {name: "Paul Marks", gpa: 3.2},
        {name: "Sue Edgar", gpa: 3.8}
      ]
  };

  $scope.currDate = new Date();

  $scope.randomStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "

  $scope.randArray = [
    "Tomato",
    "Potato",
    "Bread",
    "Pickles",
    "Raisins"
  ];

  $scope.weather = [
    {day: "Monday", rain: false},
    {day: "Tuesday", rain: true}
  ];

});
