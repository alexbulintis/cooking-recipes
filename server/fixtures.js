Meteor.startup(function(){
    var num = Recipes.find().count();
    
    if(num === 0) {
        var fixtures = [
          {
              title: 'Pizza Margherita',
              ingredients: '1 pizza base, 1kg cheese, 1kg tomatoes',
              instructions: 'Put everything in the oven and cook for 1h',
              owner: 'admin'
          },
          {
              title: 'Chicken Sandwich',
              ingredients: '1 chicken, 1 sandwich',
              instructions: 'Put chicken in sandwich',
              owner: 'admin'
          },
          {
              title: 'Pasta',
              ingredients: '250g of pasta, 1lt water',
              instructions: 'Heat water and add pasta. Stir frequently',
              owner: 'admin'
          },
          {
              title: 'Cheese Sandwich',
              ingredients: '1 slice of cheese, 2 slices of bread',
              instructions: 'Put cheese between the slices of bread',
              owner: 'admin'
          }
        ];
        
        fixtures.forEach(function(element){
            Recipes.insert(element);
        });
    }
});