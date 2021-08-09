'use strict';
console.log('the app js file is connected');

//Global Variables
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.getElementById('store-holder');





//constructor function
function CookieStore(locationName, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerSale){
  this.locationName = locationName;
  this.minCustomerPerHour = minCustomerPerHour ;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  CookieStore.allStores.push(this);
}


//proto functions
CookieStore.prototype.calcCustomersEachHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
  }
};

CookieStore.prototype.calcCookiesEachHour = function(){
  this.calcCustomersEachHour();
  for (let i = 0; i < hours.length; i++){
    let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailyCookies = this.totalDailyCookies + oneHour;
  }

};

//grabbed table for stores from the html
CookieStore.prototype.render = function(){
  this.calcCookiesEachHour();
  // let storeTable = document.getElementById('store-holder');
  let tableRow = document.createElement('tr');


  let locationNameCell = document.createElement('td');
  locationNameCell.textContent = this.locationName;
  tableRow.appendChild(locationNameCell);


  for (let i = 0; i < hours.length; i++){
    let cookieData = document.createElement('td');
    cookieData.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(cookieData);
  }

  let cookieTotal = document.createElement('td');
  cookieTotal.textContent = this.totalDailyCookies;
  tableRow.appendChild(cookieTotal);
  tableElement.appendChild(tableRow);
};


/////////////////row////////////////////





/////////////////addEvent/////////////////








///////////////render/////////////////////





////////////////class demo
function makeHeaderRow() {
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Location';
  tableRow.appendChild(tableHeaderElement);

  for(let i = 0; i < hours.length; i++){
    let tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hours[i];
    tableRow.appendChild(tableHeaderElement);
  }
  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Location Totals';
  tableRow.appendChild(tableHeaderElement);
  tableElement.appendChild(tableRow);

}

function makeFooterRow(){
  const tableRow = document.createElement('tr');
  let tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = 'Totals';
  tableRow.appendChild(tableHeaderElement);

  let totalOfTotals = 0;

  for(let i = 0; i < hours.length; i++){
    let hourlyTotals = 0;

    for(let j = 0; j < CookieStore.allStores.length; j++){
      // console.log(hourlyTotals);
      hourlyTotals += CookieStore.allStores[j].cookiesEachHour[i];
      totalOfTotals = totalOfTotals + CookieStore.allStores[j].cookiesEachHour[i];
    }
    //close inside for loop
    tableHeaderElement = document.createElement('th');
    tableHeaderElement.textContent = hourlyTotals;
    tableRow.appendChild(tableHeaderElement);
  }//closes first for loop

  tableHeaderElement = document.createElement('th');
  tableHeaderElement.textContent = totalOfTotals;
  tableRow.appendChild(tableHeaderElement);
  tableElement.appendChild(tableRow);
}//closes function














////////////////////////////////////////////ClassDEmo

CookieStore.allStores = [];

new CookieStore('Seattle', 23, 65, 6.3);
new CookieStore('Tokyo', 3, 24, 1.2);
new CookieStore('Dubai', 11, 38, 3.7);
new CookieStore('Paris', 20, 38, 2.3);
new CookieStore('Lima', 2, 16, 4.6);

// console.log('all stores array', CookieStore.allStores);

//runs our random number in our objects
function random(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}









CookieStore.prototype.renderAllStores = function(){

  let tableBody = document.getElementById('store-holder');
  tableBody.innerHTML = '';

  makeHeaderRow();
  for(let i = 0; i < CookieStore.allStores.length; i++){
    CookieStore.allStores[i].render();
    // console.log('',CookieStore.allStores[i]);
  }
  makeFooterRow();
};




CookieStore.prototype.renderAllStores();

function handleFormSubmitted(event){
  event.preventDefault();
  //name
  // console.log('you click on the submit and the event fired and we are in the handle sumbit function');
  let shopName = document.getElementById('name');
  let shopNameValue = shopName.value;
  // console.log('This is the shop name: ', shopNameValue);

  // min customer
  let minCustomer = document.getElementById('minCustomer');
  let minCustomerValue = parseInt(minCustomer['value']);
  // console.log('Minimum Customers', typeof minCustomerValue);

  //max customer
  let maxCustomer = document.getElementById('maxCustomer');
  let maxCustomerValue = parseInt(maxCustomer['value']);
  // console.log('Maximum Customers: ', maxCustomerValue);

  // avg cookies from the form
  let avgCookiesInput = document.getElementById('avgCookies');
  // console.log('line 213   ', avgCookiesInput);
  let aveCookiesPerCustomerValue =  parseInt(avgCookiesInput['value']);
  // console.log('Average Cookies Per Customer: ', aveCookiesPerCustomerValue);

  let shopForm = document.getElementById('newStore');
  shopForm.reset();

  let newShop = new CookieStore(shopNameValue, minCustomerValue, maxCustomerValue, aveCookiesPerCustomerValue);


  console.log('we created a new shop', newShop);
  newShop.calcCustomersEachHour();
  newShop.calcCookiesEachHour();
  newShop.renderAllStores();



}











let formElement = document.getElementById('newStore');
formElement.addEventListener('submit', handleFormSubmitted);
