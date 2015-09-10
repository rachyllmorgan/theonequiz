var FruitMaker = (function(fruit) {

  var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];
  
    fruit.slices = function(name, num){
      var sliceArray = [];
      var result = '', i;
        for (i = 0; i < num; i++) {
          if ((num & i) === i) {
          result += name;
          }
          sliceArray.push(name);
        }; 
        return sliceArray;
    }

    return fruit;

})(FruitMaker);

console.log(FruitMaker);
console.log(FruitMaker.slices("apple",4))