'use strict';

require('dotenv').config();

// Connects to our database depending on the URI as an environmental variable
const POSTGRES_URI =process.env.NODE_ENV ==="test" ? "sqlite:memory:" :process.env.DATABASE_URL
// require both the Sequelize and Datatype  constructor from the sequelize package
const {Sequelize,DataTypes}=require('sequelize')
// We will configure our connection options for production

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};
// our connection object
// we are going to use this to connect to Postgres
//connection string

  const sequelize=new Sequelize(POSTGRES_URI,sequelizeOptions)

  const foodSchema=require('./food.model')
  const clothesSchema=require('./clothes.model')

  const foodModel=foodSchema(sequelize, DataTypes)
  const clothesModel=clothesSchema(sequelize, DataTypes)

  const collection=require("./lib/collection")

  const foodCollection=new collection(foodModel);
  const clothesCollection=new collection(clothesModel);

  module.exports = {
    db: sequelize,
    Food : foodCollection,
    Clothes : clothesCollection,
    Collection:collection
  };