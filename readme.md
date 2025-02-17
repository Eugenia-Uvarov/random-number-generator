# Random Number Microservice

## Description:
  * This microservice provides random numbers via HTTP GET requests.

## Prerequisites:
  * Install Node v20.12.2
  * Install Express 4.21.2

## Instalation:
  1. Clone the repository
  2. Run `npm install` to install dependencies

## Running the Service
  * Start the service with: npm run dev

## Requesting Data:

  * To request a random number between 1 and 6012 inclusively, send a GET request to the following endpoint: "http//localhost/random"
  * For custom limits, use query parameters: "http//localhost/random?min={someLowNumber}&max={someHighNumber}", where {someLowNumber} should be stricly less than {someHighNumber}

## Receiving Data

  * The microservice responds with JSON in the following format: {"number": 42}

  ### Example Request and Response(Node.js):

  fetch("http//localhost/random?min={someLowNumber}&max={someHighNumber}",{
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => respone.json())
  .then(data => console.log(data.number));

  ### Example Request and Response(Python):
  
  import requests

  url = "http://localhost:4000/random"
  response = requests.get(url)
  print(response.json())  

Note: Ensure the microservice is running on port 4000 before making requests.

