'use strict';

const express = require('express');

const { Clothes } = require('../models/index');

const clothesRouter = express.Router();


// RESTful Route Delectation 
clothesRouter.get('/clothes', getclothes); // get all the clothes form the DB
clothesRouter.get('/clothes/:id', getOneClothes); // gets a Clothes by ID
clothesRouter.post('/clothes', createClothes); // creating a new Clothes
clothesRouter.put('/clothes/:id', updateClothes); // updating a Clothes by their ID
clothesRouter.delete('/clothes/:id', deleteClothes); // deleting a Clothes by their ID


async function getclothes(req, res) {
  let allClothes=await Clothes.read();
  res.status(200).json(allClothes)
}

async function getOneClothes(req, res) {
  const id = parseInt(req.params.id);
  const clothes = await Clothes.readOne(id);
  res.status(200).json(clothes);
}

async function createClothes(req, res) {
  const obj = req.body;
  let clothes=await Clothes.create(obj)
  res.status(201).json(clothes);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  const updatedClothes = await Clothes.update(id,obj);
  res.status(201).json(updatedClothes);
}

async function deleteClothes(req, res) {
  const id = parseInt(req.params.id);
  const deletedClothes = await Clothes.delete(id);
  res.status(204).json(deletedClothes);
}


module.exports = clothesRouter;