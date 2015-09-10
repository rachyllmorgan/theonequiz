var FruitMaker = (function(fruit) {
	
	var fruitArray = ["apples", "bananas", "cherries", "huckleberries"];
	
	return {	

		getFruit: function(){
			return fruitArray;
		},
		addFruit: function(fruit){
			fruitArray.push(fruit);	
		}
	};
		
})(FruitMaker);