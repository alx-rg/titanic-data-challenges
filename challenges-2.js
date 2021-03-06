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

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of 
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

const getAllValuesForProperty = (data, property) => {
  const newArray = data.map((passenger) => passenger.fields[property]);
  return newArray;
};

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an 
// array of all the male passengers [{...}, {...}, {...}, ...]

const filterByProperty = (data, property, value) => {
  const newMatches = data.filter((passenger) => passenger.fields[property]===value)
  return newMatches;
};

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a 
// given property have been removed

const filterNullForProperty = (data, property) => {
  const newFiltered = data.filter((passenger) => passenger.fields[property] !== undefined)
  return newFiltered
}

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum 
// for any (numeric) property
// Return the total of all values for a given property.

const sumAllProperty = (data, property) => {
  const newArray = data.filter((passenger) => passenger.fields[property])
  const newSum = newArray.reduce((acc ,passenger) => {
    return acc + passenger.fields[property]
  },0)
  return newSum
}


// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an 
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C, 
// and Q, and a couple passengers have undefined for this property. 
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked 
// at Cherbourg, 77 emabrked at Queenstown, and 2 are undedfined

const countAllProperty = (data, property) => {
  const uniqueValues = data.reduce((acc, passengers) => {
    if (acc[passengers.fields[property]] === undefined || 0) {
      acc[passengers.fields[property]] = 1
    } else {
      acc[passengers.fields[property]] += 1
    }
    return acc
  }, {})
  return uniqueValues
}


// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values 
// of a properties divided into buckets and counting the number
// of items in each bucket.

const makeHistogram = (data, property, step) => {
  const noNull = data.filter((passenger) => passenger.fields[property] !== undefined)
  const uniqueValues = noNull.reduce((acc, passengers) => {
    if (acc[Math.floor(passengers.fields[property] / step)] === undefined) {
      acc[Math.floor(passengers.fields[property] / step)] = 1      
    } else {
      acc[Math.floor(passengers.fields[property] / step)] += 1
    }
    return acc
  }, [])
  
  return Array.from(uniqueValues, value => value || 0)
}

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an 
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

const normalizeProperty = (data, property) => {
  const removedNull = data.filter((passenger) => passenger.fields[property] !== undefined)
  const allData = removedNull.map((passenger) => passenger.fields[property])
  const maxData = Math.max(...allData)
  const normalizedValues = allData.map((value) => value / maxData)
  return normalizedValues
}

// 8 ------------------------------------------------------------
// Write a function that gets all unique values for a property. 
// Given the array of data and a property string it should return
// an array of all of the unique values under that property. 
// For example if the property string were "sex" this function 
// would return ['male', 'female']

const getUniqueValues = (data, property) => {
  const getAllUniqueValues = data.reduce((acc, passenger) => {
    const propertyValues = passenger.fields[property]
    return { [propertyValues]: propertyValues, ...acc }
  }, {}) 

  return Object.values(getAllUniqueValues)
}

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
  getAllValuesForProperty,
  filterByProperty,
  filterNullForProperty,
  sumAllProperty,
  countAllProperty,
  makeHistogram,
  normalizeProperty,
  getUniqueValues
}