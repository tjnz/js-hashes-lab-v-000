'use strict';

function addIngredient(recipe, name, amt) {
	recipe[name] = amt;
	return recipe;
}

function removeIngredient(recipe, ingredient) {
	delete recipe[ingredient];
	return recipe;
}

function updateIngredient(recipe, ingredient, amt) {
	return addIngredient(recipe, ingredient, amt);
}

function readRecipe(recipe) {
	for (var ing in recipe) {
		console.log("this recipe calls for " + recipe[ing] + " of " + ing);
	}
}