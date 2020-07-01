const db = require('../db');
const Sequelize = require('sequelize');
const Person = db.define('Person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  findWithRecipes:() => {
    return Recipe.findall({
      where:{
        PersonId: this.id
      }
    })
  }
});


module.exports = Person;
