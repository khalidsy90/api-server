'use strict';

const express = require('express');

const { Food } = require('../models/index');

const foodRouter = express.Router();
const validator= require('../middleware/validator')

// RESTful Route Delectation 
foodRouter.get('/food', getfood); // get all the food form the DB
foodRouter.get('/food/:id', getOnefood); // gets a food by ID
foodRouter.post('/food', validator,createfood); // creating a new food
foodRouter.put('/food/:id', updatefood); // updating a food by their ID
foodRouter.delete('/food/:id', deletefood); // deleting a food by their ID


async function getfood(req, res) {
  let allFood=await Food.read();
  res.status(200).json(allFood)
}

async function getOnefood(req, res) {
  const id = parseInt(req.params.id);
  const food = await Food.readOne(id);
  res.status(200).json(food);
}

async function createfood(req, res) {
  const obj = req.body;

  let food=await Food.create(obj)
  res.status(201).json(food);

}

async function updatefood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  const updatedfood = await Food.update(id,obj);
  res.status(201).json(updatefood);
}

async function deletefood(req, res) {
  const id = parseInt(req.params.id);
  const deletedfood = await Food.delete(id);
  res.status(204).json(deletefood);
}


module.exports = foodRouter;