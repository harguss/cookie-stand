'use strict';
console.log('the app js file is connected');


// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:


// Location	Min / Cust	Max / Cust	Avg Cookie / Sale

// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6
//two things 1 allows us the right number of iterations in our for loop





// 

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.



const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 ////////added during class demo
 //const hours =[0, 0, 0, 0, 0, 0, ]

// locationName: 'Seattle',
// minCustomerPerHour: 23,
// maxCustomerPerHour: 65,
// avgCookiesPerSale: 6.3,
// //needed these to store information 
// customersEachHour: [],
// cookiesEachHour: [],
// totalDailyCookies: 0,

function CookieStore(storeLoc, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale){
  this.storeLoc = storeLoc;
  this.minCustomerPerHour = minCustomerPerHour ;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
}



CookieStore.prototype.calcCustomersEachHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
  }
};



//runs our random number in our objects
function random(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}



CookieStore.prototype.calcCookiesEachHour= function(){

  for (let i = 0; i < hours.length; i++){
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies = this.totalDailyCookies + oneHour;
  }
};


CookieStore.prototype.render = function(){
  //grabbed table for stores from the html
  // let storeTable = document.getElementById('store-holder');
  //create a table row for the time in our table
  // let tableTime = document.createElement('tr');
  let tbody = document.getElementById('storeData');
  let tableRow = document.createElement('tr');
 
  /////////
  let tdLocationName = document.createElement('td');
  tdLocationName.textContent = this.storeLoc;
  tableRow.appendChild(tdLocationName);
  tbody.appendChild(tableRow);

// /////////////////////////////added during class demo
// //let this.cookiesEachHour =document.createElement('td) 
// for(let i=0; hours. length; i++)
// let ourCookieForThisHour=this.cookiesForThisHour
// cookiesTotal[i]         =cookieForThisHour
// cookieTotal += cookieForThisHour;

// let cookiesEachHourlyData = document.createElement('td')
// cookiesEachHourlyData.textContent = cookieForThisHour
// //let cookietotal = document.createElement('td)
// /////////////////////////////////////////////////////////
 
  //create a row for each of our stores
  //at the end of each store row tally the store totals in the last cell
  //after all the stores render the last row will tally the hourly total for each store

};

let storeOne = new CookieStore('Seattle', 23, 65, 6.3);
storeOne.calcCustomersEachHour();
storeOne.calcCookiesEachHour();
//add the rest of stores
let storeTwo= new CookieStore('Tokyo', 3, 24, 1.2);
storeTwo.calcCustomersEachHour();
storeTwo.calcCookiesEachHour();

let storeThree= new CookieStore('Dubai', 11, 38, 3.7);
storeThree.calcCustomersEachHour();
storeThree.calcCookiesEachHour();

let storeFour= new CookieStore('Paris', 20, 38, 2.3);
storeFour.calcCustomersEachHour();
storeFour.calcCookiesEachHour();

let storeFive= new CookieStore('Lima', 2, 16, 4.6);
storeFive.calcCustomersEachHour();
storeFive.calcCookiesEachHour();











const allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

//IIFE
(function renderAllStores(){
  for(let i = 0; i < allStores.length; i++){
    console.log(allStores[i]);
    allStores[i].render();
  }
})();
