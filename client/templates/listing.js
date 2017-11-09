Template.listing.helpers({
    entries: function() {
        return Recipes.find({}, {sort: {title: 1}});
    },
    isOwner: function() {
        // check if the user is logged in
        if(!Meteor.userId()) return false;
        
        // check if the user is the owner
        return Meteor.userId() == this.owner;
    }
});

Template.listing.events({
    'click .delete': function(event){
        Meteor.call('deleteRecipe', this._id);
    }
})