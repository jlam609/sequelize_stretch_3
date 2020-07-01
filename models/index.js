const Person = require('./person');
const Recipe = require('./recipe');
//YOUR CODE HERE

Recipe.belongsTo(Person)
Person.hasMany(Recipe)

Person.prototype.findWithRecipes = function(){
    console.log(this.name)
    return Recipe.findAll({
      where:{
        PersonId: this.name
      }
    })
  }
module.exports = { Person, Recipe };
