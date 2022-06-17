// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

//should return a new array containing the first two drivers from the passed-in array
const returnFirstTwoDrivers = drivers => drivers.slice(0, 2);

//should return an array of the last two drivers
const returnLastTwoDrivers = drivers => drivers.slice(-2);

//has the `returnFirstTwoDrivers` function to as its first element,
// has the `returnLastTwoDrivers` function to as its last element,
// allows us to invoke either function from the array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//returns a function. should multiply a given value using the created multiplier
const createFareMultiplier = fareMultiplier => {
  return (value) => fareMultiplier * value;
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, drivers) => drivers (arrayOfDrivers);