Template.recipeForm.helpers({
    showTitle: function(){
        var title = 'New Recipe'; // default title if we're not editing one
        var recipeId = FlowRouter.getParam('id');
        var recipe = Recipes.findOne(recipeId);
        
        // if we're editing a recipe, get its title
        if(recipe) {
            title = recipe.title;
        }
        return title;
    },
    recipe: function() {
        var recipeId = FlowRouter.getParam('id');
        var recipe = Recipes.findOne(recipeId) || {};
        return recipe;
    },
    canShow: function() {
        var result = true;
        // check if user is logged in
        if(!Meteor.userId()) result = false;
        else {
            // check if user is the owner
            var recipeId = FlowRouter.getParam('id');
            var recipe = Recipes.findOne(recipeId);
            
            if(recipe) {
                result = recipe.owner == Meteor.userId()
            }
        }
        if(result) {
            return true;
        }
        else {
            FlowRouter.redirect('/');
        }
    }
});

Template.recipeForm.events({
    'submit #recipeForm': function(event){
        // prevent refresh
        event.preventDefault();
        
        // grab the data from the form
        var data = {
            title: event.target.querySelector('#title').value,
            ingredients: event.target.querySelector('#ingredients').value,
            instructions: event.target.querySelector('#instructions').value,
        };
        
        var recipeId = FlowRouter.getParam('id');
        
        // if there's an id, update that recipe
        if(recipeId) {
            Meteor.call('updateRecipe', recipeId, data);
        }
        else {
            // insert into the db
            Meteor.call('insertRecipe', data);
        }
        
        // redirect to home page
        FlowRouter.go('/');
    }
})