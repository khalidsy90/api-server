'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const clothesRouter=require("./routes/clothes.route")
const foodRouter=require('./routes/food.route')
const logger=require('../src/middleware/logger')

const PORT = process.env.PORT || 3030;

// global middleware
app.use(express.json());
app.use(logger)

app.use(clothesRouter)
app.use(foodRouter)

app.use('*', notFoundHandler);
app.use(errorHandler);

app.get("/",(req,res) => {
  
})
function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}