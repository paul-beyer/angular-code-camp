angular
  .module('cc-fitness',[])
  .controller('ccFitnessController', ['$scope', function($scope) {
    var ENTER_KEY = 13; //this is the value of enter key, how do we find value of each key?

    var counter = 0;
	var calorie = 100;
	var protein = 10;
	var fat = 5;


    $scope.food = { foods: [] };


    $scope.keyPress = function(keyEvent) {
      if (keyEvent.keyCode === ENTER_KEY) {
//{{newMealType}} , {{newFoodName}} , {{newFoodQuantity}} , {{newFoodUnit}} , {{newFoodCaloriePerUnit}} , {{newFoodTotalCalorie}}

        $scope.food.foods.push({type : $scope.newMealType, name: $scope.newFoodName, quantity : $scope.newFoodQuantity, xyz: $scope.newFoodUnit, caloriePerUnit : $scope.newFoodCaloriePerUnit , totalCalorie : $scope.newFoodTotalCalorie});
	alert($scope.food.foods);
		$scope.newMealType='';
		//$scope.food.foods.push({ id: ++counter, text: $scope.newFood , calorie: ++calorie, protein: ++protein, fat: ++fat});
        //$scope.newFood = '';
		//$scope.newCalorie = '';
      }
    };

    $scope.delete = function(deleteFood) {
      $scope.food.foods = _.reject($scope.food.foods, function(food) {
        return deleteFood.id === food.id;
      });
    };
  }]);