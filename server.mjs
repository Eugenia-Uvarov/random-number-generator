"use strict";
import express from "express";


//const express = require(express);
const app = express();
// if using .env 
// const PORT = process.env.PORT
const PORT = 4000;

const LOW_LIMIT = 1;
const HIGH_LIMIT = 1000;



app.use(express.json());


app.get('/random', (req,res) => {

  const {
    min = 1,
    max = 1000
  } = req.query;

  console.log(min, max)

  

  //const randomNumber = Math.floor(Math.random()*( HIGH_LIMIT - LOW_LIMIT) + LOW_LIMIT );
  let rn = Math.random()
  const randomNumber = Math.floor( (rn * (max - min + 1 ) ))+ Math.floor(min);

  console.log( rn, max,min,randomNumber)
  res.status(200).json({
    number: randomNumber 
  })
  console.log(`${randomNumber} was sent`)
})






// sample request for testing
// const req = {
//   query: {
//     min: 0,
//     max: 1000
//   }
// }











app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});