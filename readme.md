# microservice written by request of team mate

## description:
  current service provides random number in json format {number: "NUMBER"} by get request.

## prerequisites:
  * install node v20.12.2
  * install express 4.21.2

## instalation
  * npm install 

## run
  * npm run dev

## usage
  * for get random integer number between 1 and 6012 inclusively use http get request like:
  "http//localhost/random"
  * for custom limits use get request: 
  "http//localhost/random?min={someLowNumber}&max={someHighNumber}"
  where {someLowNumber} should be stricly less than {someHighNumber}

  * example ussage for node:
  fetch("http//localhost/random?min={someLowNumber}&max={someHighNumber}",{
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
  .then(response => respone.json())
  .then(data => console.log(data.number));

