Recipes = new Mongo.Collection('recipes');

Meteor.methods({
    deleteRecipe: function(id) {
        // check if user is the owner
        var recipe = Recipes.findOne(id);

        if(Meteor.userId() != recipe.owner) {
            throw new Meteor.Error('not-authorized', 'You don\'t own this recipe');
        }
        
        Recipes.remove(id);
    },
    insertRecipe: function(data) {
        // check if user is logged in
        if(!Meteor.userId()) {
            throw new Meteor.Error('not-authorized', 'You have to be logged in');
        }
        
        // set recipe owner
        data.owner = Meteor.userId();
        
        // insert into database
        Recipes.insert(data);
    },
    updateRecipe: function(id, data) {
        // check if user is logged in
        if(!Meteor.userId()) {
            throw new Meteor.Error('not-authorized', 'You have to be logged in');
        }
        
        // check if user is the owner
        var recipe = Recipes.findOne(id);
        
        if(Meteor.userId() != recipe.owner) {
            throw new Meteor.Error('not-authorized', 'You don\'t own this recipe');
        }
        
        // save the right owner (in case another one is sent client-side)
        data.owner = Meteor.userId();
        
        Recipes.update(id, data);
    }
});