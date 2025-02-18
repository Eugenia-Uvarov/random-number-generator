"use strict";
import express from "express";

const app = express(); // if using .env: const PORT = process.env.PORT

// Constants
const PORT = 4000;
const LOW_LIMIT = 1;
const HIGH_LIMIT = 6012;

// Middleware for parsing JSON
app.use(express.json()); 

app.get('/random', (req,res) => {
  let {
    min,
    max
  } = req.query;

  // Parse min and max to integers, use defaults if not provided
  min = min ? parseInt(min) : LOW_LIMIT;
  max = max ? parseInt(max) : HIGH_LIMIT;

   // Validate that min and max are numbers
  if (isNaN(min) || isNaN(max) ){
    return res.status(400).json({
      error: 'Invalid range parameters. Please, provide valid min and max values.'
    })
  }

  // Validate that min is less than max
  if (min >= max) {
    return res.status(400).json({error: 
      'Min value should be stricly LESS than max value'
    })
  }

  // Generate a random number
  let rn = Math.random()
  const randomNumber = Math.floor( (rn * (max - min + 1 ) ))+ Math.floor(min);

  // Send the random number as a JSON response
  res.status(200).json({
    number: randomNumber 
  })
  console.log(`${randomNumber} was sent`)
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});