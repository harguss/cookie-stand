'use strict';
console.log('this file is connected.');


// Stores the min/max hourly customers,//done
//and the average cookies per customer,//done
// Uses a method of that object to generate a random number of customers per hour.//done


// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
//cookies each hour. + ave cookies purchased + random customers generated.


// Store the results for each location in a separate array...//started


//this will later as we use document object model to create and append to the html page.
// Display the values of each array as unordered lists in the browser
// Calculating the sum of these hourly totals; your output for each location should look like this:

let storeArray = [];
//object literals
let storeOne = {
  location: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  aveCookieSale: 6.3,
  customerPerHour: function(){
    return randomCustPerHour(this.maxCustomer, this.minCustomer);
  },
  cookiesPerHour: function(){
    return randomCustPerHour(this.aveCookieSale),
    console.log('do this still');
  }
};
storeOne.customerPerHour();
storeOne.cookiesPerHour();
console.log(storeOne.customerPerHour());

let storeTwo = {
  location: 'Tokyo',
  minCustomer: 3,
  maxCustomer: 24,
  aveCookieSale: 2.1,
  //customerEachHour: []
//totlaDailyCookies

  customerPerHour: function(){
    return randomCustPerHour(this.maxCustomer, this.minCustomer);

    //calc CustomerEachHour
  },
  cookiesPerHour: function(){
    return randomCustPerHour(this.aveCookieSale),
    console.log('do this still');
  }
  //calcCookiesperHour: function(){
  //  this.calccustomersEacHour: function()
 // }

 //render({
   //this.calCookiesEachHour();
   const un

 //})
};
storeTwo.customerPerHour();
console.log(storeTwo.customerPerHour());

let storeThree = {
  location: 'Dubai',
  minCustomer: 11,
  maxCustomer: 38,
  aveCookieSale: 3.7,
  customerPerHour: function(){
    return randomCustPerHour(this.maxCustomer, this.minCustomer);
  },
  cookiesPerHour: function(){
    return randomCustPerHour(this.aveCookieSale),
    console.log('do this still');
  }
};
storeThree.customerPerHour();
console.log(storeThree.customerPerHour());

let storeFour = {
  location: 'Paris',
  minCustomer: 20,
  maxCustomer: 38,
  aveCookieSale: 2.3,
  customerPerHour: function(){
    return randomCustPerHour(this.maxCustomer, this.minCustomer);
  },
  cookiesPerHour: function(){
    return randomCustPerHour(this.aveCookieSale),
    console.log('do this still');
  }
};
storeFour.customerPerHour();
console.log(storeFour.customerPerHour());

let storeFive = {
  location: 'Lima',
  minCustomer: 2,
  maxCustomer: 16,
  aveCookieSale: 4.6,
  customerPerHour: function(){
    return randomCustPerHour(this.maxCustomer, this.minCustomer);
  },
  cookiesPerHour: function(){
    return randomCustPerHour(this.aveCookieSale),
    console.log('do this still');
  }
};
storeFive.customerPerHour();
console.log(storeFive.customerPerHour());

// //let petOneImg = document.createElement('img');
// console.log(petOneImg);
// petOneImg.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
// petOneImg.setAttribute('alt', 'Cute kitty huh? Adopt kitty Now!');
// article.appendChild(petOneImg);











































function randomCustPerHour(minCust, maxCust){
  return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
}
