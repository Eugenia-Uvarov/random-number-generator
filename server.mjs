"use strict";
import { error } from "console";
import express from "express";


//const express = require(express);
const app = express();
// if using .env 
// const PORT = process.env.PORT
const PORT = 4000;

const LOW_LIMIT = 1;
const HIGH_LIMIT = 6012;



app.use(express.json());


app.get('/random', (req,res) => {
  
  let {
    min,
    max
  } = req.query;

  //console.log(min, max)


  min = min ? parseInt(min) : LOW_LIMIT;
  max = max ? parseInt(max) : HIGH_LIMIT;

  if (isNaN(min) || isNaN(max) ){
    
    return res.status(400).json({
      error: 'invalid range parameters. Please, please provide valid min and max values.'
    })
  }

  if (min >= max) {
    return res.status(400).json({error: 
      'Min value should be stricly LESS than max value'
    })
  }


  let rn = Math.random()
  const randomNumber = Math.floor( (rn * (max - min + 1 ) ))+ Math.floor(min);

  //console.log( rn, max,min,randomNumber)
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