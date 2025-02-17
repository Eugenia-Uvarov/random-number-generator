"use strict";
import express from "express";


//const express = require(express);
const app = express();
// if using .env 
// const PORT = process.env.PORT
const PORT = 4000;

const LOW_LIMIT = 0;
const HIGH_LIMIT = 1000;



app.use(express.json());


app.get('/random', (_,res) => {

  const randomNumber = Math.floor(Math.random()*HIGH_LIMIT + LOW_LIMIT );

  res.status(200).json({
    number: randomNumber 
  })
  console.log(`${randomNumber} was sent`)
})



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});