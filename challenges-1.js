// ================================================================

// Titanic Dataset challenges! 

// Your goal is to write some functions that will extract
// relevant data from the dataset. 

// Write your code here in this file. 

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant 
// piece of information from the data and return it. 

// const data = require('./titanic-passengers.json')
// const datasetid = data.fields.embarked
// console.log(data.length) 
// console.log(datasetid)

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers. 
// Returns a number.

const getTotalPassengers = (data) => {
  const count = data.reduce((acc) =>
  {return(acc + 1)}, 0)
  // const count = data.length
  return count
}

// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived 
// if their survived property is "Yes".
// Return a number.

const getSurvivorCount = (data) => {
  // const survivorCount = data.filter((passenger) => passenger.fields.survived ==="Yes").length
  const survivorCount = data.reduce((acc, passenger) => {
    return acc + (passenger.fields.survived === "Yes")
  }, 0)
  return survivorCount
}

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// did not survive if their survived property is "No".
// Return a number.

const getCasualityCount = (data) => {
  // const diedCount = data.filter((passenger) => passenger.fields.survived === "No").length
  const diedCount = data.reduce((acc, passenger) => {
    return acc + (passenger.fields.survived === "No")
  }, 0)
  return diedCount
}

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function 
// takes the data and the passenger class a string. Find all of the 
// passengers whose pclass matches and return the count. 
// Return a number

const countPassengersInClass = (data, pclass) => {
  const classFilter = data.filter((passenger) => passenger.fields.pclass === pclass).length
  return classFilter
}


// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes 
// the data and passenger class. 
// Return the count of survivors in that pclass.

const getSurvivorCountForClass = (data, pclass) => {
  const classSurvivor = data.filter((passenger) => passenger.fields.pclass === pclass & passenger.fields.survived === "Yes").length
  return classSurvivor
}

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns 
// the number of passengers who did not survive for that class. 

const getCasualityCountForClass = (data, pclass) => {
  const classDied = data.filter((passenger) => passenger.fields.pclass === pclass & passenger.fields.survived === "No").length
  return classDied
}

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You need to filter
// passenger data where the age is missing. 

const getMinAge = (data) => {
  const youngest = data.reduce((acc, passenger) => {
    if (passenger.fields.age < acc){
      acc = passenger.fields.age
    } 
    return (acc)
  }, 80 )
  return youngest
}

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger. Filter passengers where 
// age is missing.

const getMaxAge = (data) => {
  const oldest = data.reduce((acc, passenger) => {
    if (passenger.fields.age > acc) {
      acc = passenger.fields.age
    }
    return (acc)
  }, 0)
  return oldest
}

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop. 
// Each passenger has a embarked property with a value of: S, C,
// or Q. This function takes in the passenger data and the 
// embarkation code. Return the count of passenegers with that code.

const getEmbarkedCount = (data, embarked) => {
  const embarkAll = data.filter(passenger => passenger.fields.embarked === embarked).length
  // const embarkCount = embarkAll.reduce((acc) => {
  //   return (acc + 1) 
  // }, 0)

  return embarkAll
}

// const getEmbarkedCount = (data, embarked) => {
//   const passengerEmbarked = data.reduce((acc, passenger) => {
//     if (passenger.fields.embarked === embarked) {
//       return acc + 1
//     }
//     return acc
//   }, 0)
//   return passengerEmbarked
// }

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing 
// for some passengers you'll need to filter this out!

const getMinFare = (data) => {
  const lowestFairAll = data.filter(passenger => passenger.fields.fare !== undefined)
  const minFare = lowestFairAll.reduce((acc, passenger) => {
    if (acc > passenger.fields.fare) {
      acc = passenger.fields.fare
    }
    return acc
  }, 900)
  return minFare
}


// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the 
// passengers are missing data for fare. Be sure to filter these! 

const getMaxFare = (data) => {
  const highestFairAll = data.filter(passenger => passenger.fields.fare !== undefined)
  const maxFare = highestFairAll.reduce((acc, passenger) => {
    if (acc < passenger.fields.fare) {
      acc = passenger.fields.fare
    }
    return acc
  }, 0)
  return maxFare
}

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender. Each passenger object has
// "sex" property that is either "male" or "female"

const getPassengersByGender = (data, gender) => {
  const passGender = data.filter((passenger) => passenger.fields.sex === gender).length
  return passGender
}

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender. This 
// function receives parameters of data and gender. Match the gender
// to the "sex" property and check the "survived" property. 

const getSurvivorsByGender = (data, gender) => {
  const passGenderSurvived = data.filter((passenger) => passenger.fields.sex === gender & passenger.fields.survived === "Yes").length
  return passGenderSurvived
}

// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender. 

const getCasualitiesByGender = (data, gender) => {
  const passGenderDied = data.filter((passenger) => 
    passenger.fields.sex === gender & 
    passenger.fields.survived === "No").length
  return passGenderDied
}

// 15 --------------------------------------------------------------
// Return the total of all fares paid. Add up all of the fares and 
// return that number. Be sure to filter the passengers records 
// where the fare is missing! 

const getTotalFare = (data) => {
  const totalFares = data.reduce((acc, passenger) => {
    return acc + passenger.fields.fare
  }, 0)
  return totalFares
}

// 16 --------------------------------------------------------------
// Return the average fare paid. Add up all of the fares and divide 
// by the number of passengers. Be sure to filter passengers who are
// missing a fare! 

const getAverageFare = (data) => {
  const averageFare = data.filter((passenger) => passenger.fields.fare !== undefined)
  const totalFares = averageFare.reduce((acc, passenger) => {
    return acc + passenger.fields.fare
  },0 )
  const theAverageIs = totalFares / averageFare.length
  return theAverageIs
}

// 17 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values. Filter passengers who are 
// missing fares. Sort the passengers on the fare pick the one in
// the middle: [11,33,77] <- 33 is the median. If number of items 
// is even average the two middle values. For example: [2,4,5,16]
// 4 + 5 = 9 / 2 median is 4.5!

const getMedianFare = (data) => {
  const passengerAllFares = data.filter((passenger) => passenger.fields.fare !== undefined)
  const onlyFares = passengerAllFares.map((passenger) => passenger.fields.fare)
  const orderedFares = onlyFares.sort((a,b)=>a-b)
  const numberOfPassengers = orderedFares.length
  const getMedian = Math.floor(numberOfPassengers / 2)

  if (numberOfPassengers % 2 === 0){
    return ((orderedFares[getMedian] + orderedFares[getMedian +1 ]) / 2)
  }
  return orderedFares[getMedian]
}

// 18 --------------------------------------------------------------
// Return the average age of all passengers. Add all ages and divide 
// by the number of passenegers. Be sure to filter where ages are not 
// available. 

const getAverageAge = (data) => {
  const passengerAllAges = data.filter((passenger) => passenger.fields.age !== undefined)
  const passengerTotalAge = passengerAllAges.reduce((acc, passenger) => {
    return acc + passenger.fields.age
  },0 )
  return passengerTotalAge / (passengerAllAges.length)
}

// 19 --------------------------------------------------------------
// Return the median age from passengers.

const getMedianAge = (data) => {
  const passengerAllAges = data.filter((passenger) => passenger.fields.age !== undefined)
  const onlyAges = passengerAllAges.map((passenger) => passenger.fields.age)
  const orderedAges = onlyAges.sort((a,b) => a-b)
  const numberAges = orderedAges.length
  const getMedian = Math.floor(numberAges / 2)

  if (numberAges % 2 === 0){
    return ((orderedAges[getMedian] + orderedAges[getMedian +1 ]) / 2)
  }
  return orderedAges[getMedian]
}

// 20 --------------------------------------------------------------
// Add up all of the ages for the gender provided and divide by the 
// the total number. 

const getAverageAgeByGender = (data, gender) => {
  const passengerAllGender = data.filter((passenger) => passenger.fields.sex === gender & passenger.fields.sex !== undefined & passenger.fields.age !== undefined)
  const numberOfPassengers = passengerAllGender.length
  const totalAgeOfPassengers = passengerAllGender.reduce((acc, passenger) => {
    return acc + passenger.fields.age
  }, 0)
  
  return totalAgeOfPassengers / numberOfPassengers
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
  getTotalPassengers,
  getSurvivorCount,
  getCasualityCount,
  countPassengersInClass,
  getSurvivorCountForClass,
  getCasualityCountForClass,
  getMinAge,
  getMaxAge,
  getEmbarkedCount,
  getMaxFare,
  getMinFare,
  getPassengersByGender,
  getSurvivorsByGender,
  getCasualitiesByGender,
  getTotalFare,
  getAverageFare,
  getMedianFare,
  getAverageAge,
  getMedianAge,
  getAverageAgeByGender
}