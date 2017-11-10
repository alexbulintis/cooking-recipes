if(Meteor.isClient) {
    BlazeLayout.setRoot('#main-container');
}

FlowRouter.route('/', {
    action: function(params, queryParams){
        console.log('you are in the home page');
        BlazeLayout.render('listing');
    }
});

FlowRouter.route('/newRecipe', {
    action: function(params, queryParams){
        console.log('you are in the new recipe page');
        BlazeLayout.render('recipeForm');
    }
});

FlowRouter.route('/editRecipe/:id', {
    action: function(params, queryParams){
        console.log('you are in the edit recipe page');
        BlazeLayout.render('recipeForm');
    }
});

FlowRouter.route('/recipe/:id', {
    action: function(params, queryParams){
        console.log('you are in the view recipe page for: ' + params.id);
        BlazeLayout.render('recipe');
    }
});
