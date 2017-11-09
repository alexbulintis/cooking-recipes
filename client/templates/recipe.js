Template.recipe.helpers({
    recipe: function() {
        var recipeId = FlowRouter.getParam('id');
        var recipe = Recipes.findOne(recipeId);
        console.log(recipe);
        return recipe;
    }
})