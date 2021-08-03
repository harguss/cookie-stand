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

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



let storeOne = {
  //set up of keys and values given to us.
  locationName: 'Seattle',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerSale: 6.3,
  //needed these to store information 
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  //calculate customers to store in an array
  calcCustomersEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  //calculate our cookies and call the customer each hour function
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }
  },
  //we have the render function that calls the calc cookie function which calls the calc customers function
  render(){
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById('seattle');
    for(let i = 0; i < hours.length; i++){
      //here we get cookies each hour
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //they go to the page
      unorderedList.appendChild(listItem);
    }//closes for loop
    //lastly we get total cookies, base on calcs happening above.
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};//closes object literal storeOne



let storeTwo = {
  //set up of keys and values given to us.
  locationName: 'Tokyo',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerSale: 1.2,
  //needed these to store information 
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  //calculate customers to store in an array
  calcCustomersEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  //calculate our cookies and call the customer each hour function
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }
  },
  //we have the render function that calls the calc cookie function which calls the calc customers function
  render(){
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById('tokyo');
    for(let i = 0; i < hours.length; i++){
      //here we get cookies each hour
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //they go to the page
      unorderedList.appendChild(listItem);
    }//closes for loop
    //lastly we get total cookies, base on calcs happening above.
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};//closes object literal storeTwo



let storeThree = {
  //set up of keys and values given to us.
  locationName: 'Dubai',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 3.7,
  //needed these to store information 
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  //calculate customers to store in an array
  calcCustomersEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  //calculate our cookies and call the customer each hour function
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }
  },
  //we have the render function that calls the calc cookie function which calls the calc customers function
  render(){
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById('dubai');
    for(let i = 0; i < hours.length; i++){
      //here we get cookies each hour
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //they go to the page
      unorderedList.appendChild(listItem);
    }//closes for loop
    //lastly we get total cookies, base on calcs happening above.
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};//closes object literal storeThree


let storeFour = {
  //set up of keys and values given to us.
  locationName: 'Paris',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  avgCookiesPerSale: 2.3,
  //needed these to store information 
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  //calculate customers to store in an array
  calcCustomersEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  //calculate our cookies and call the customer each hour function
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }
  },
  //we have the render function that calls the calc cookie function which calls the calc customers function
  render(){
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById('paris');
    for(let i = 0; i < hours.length; i++){
      //here we get cookies each hour
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //they go to the page
      unorderedList.appendChild(listItem);
    }//closes for loop
    //lastly we get total cookies, base on calcs happening above.
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};//closes object literal storeFour


let storeFive = {
  //set up of keys and values given to us.
  locationName: 'Lima',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  avgCookiesPerSale: 4.6,
  //needed these to store information 
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  //calculate customers to store in an array
  calcCustomersEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
    }
  },
  //calculate our cookies and call the customer each hour function
  calcCookiesEachHour: function(){
    this.calcCustomersEachHour();
    for (let i = 0; i < hours.length; i++){
      let oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies = this.totalDailyCookies + oneHour;
    }
  },
  //we have the render function that calls the calc cookie function which calls the calc customers function
  render(){
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById('lima');
    for(let i = 0; i < hours.length; i++){
      //here we get cookies each hour
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      //they go to the page
      unorderedList.appendChild(listItem);
    }//closes for loop
    //lastly we get total cookies, base on calcs happening above.
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + this.totalDailyCookies + ' cookies';
    unorderedList.appendChild(listItem);
  }
};//closes object literal storeFive












//runs our random number in our objects
function random(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}


const allStores = [storeOne, storeTwo , storeThree , storeFour , storeFive ];

//IIFE
(function renderAllStores(){
  for(let i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
})();




// 'use strict';
// console.log('this file is connected.');


// // Stores the min/max hourly customers,//done
// //and the average cookies per customer,//done
// // Uses a method of that object to generate a random number of customers per hour.//done


// // Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// //cookies each hour. + ave cookies purchased + random customers generated.


// // Store the results for each location in a separate array...//started


// //this will later as we use document object model to create and append to the html page.
// // Display the values of each array as unordered lists in the browser
// // Calculating the sum of these hourly totals; your output for each location should look like this:

// let storeArray = [];
// //object literals
// let storeOne = {
//   location: 'Seattle',
//   minCustomer: 23,
//   maxCustomer: 65,
//   aveCookieSale: 6.3,
//   customerPerHour: function(){
//     return randomCustPerHour(this.maxCustomer, this.minCustomer);
//   },
//   cookiesPerHour: function(){
//     return randomCustPerHour(this.aveCookieSale),
//     console.log('do this still');
//   }
// };
// storeOne.customerPerHour();
// storeOne.cookiesPerHour();
// console.log(storeOne.customerPerHour());

// let storeTwo = {
//   location: 'Tokyo',
//   minCustomer: 3,
//   maxCustomer: 24,
//   aveCookieSale: 2.1,
//   //customerEachHour: []
// //totlaDailyCookies

//   customerPerHour: function(){
//     return randomCustPerHour(this.maxCustomer, this.minCustomer);

//     //calc CustomerEachHour
//   },
//   cookiesPerHour: function(){
//     return randomCustPerHour(this.aveCookieSale),
//     console.log('do this still');
//   }
//   //calcCookiesperHour: function(){
//   //  this.calccustomersEacHour: function()
//  // }

//  //render({
//    //this.calCookiesEachHour();
//    const un

//  //})
// };
// storeTwo.customerPerHour();
// console.log(storeTwo.customerPerHour());

// let storeThree = {
//   location: 'Dubai',
//   minCustomer: 11,
//   maxCustomer: 38,
//   aveCookieSale: 3.7,
//   customerPerHour: function(){
//     return randomCustPerHour(this.maxCustomer, this.minCustomer);
//   },
//   cookiesPerHour: function(){
//     return randomCustPerHour(this.aveCookieSale),
//     console.log('do this still');
//   }
// };
// storeThree.customerPerHour();
// console.log(storeThree.customerPerHour());

// let storeFour = {
//   location: 'Paris',
//   minCustomer: 20,
//   maxCustomer: 38,
//   aveCookieSale: 2.3,
//   customerPerHour: function(){
//     return randomCustPerHour(this.maxCustomer, this.minCustomer);
//   },
//   cookiesPerHour: function(){
//     return randomCustPerHour(this.aveCookieSale),
//     console.log('do this still');
//   }
// };
// storeFour.customerPerHour();
// console.log(storeFour.customerPerHour());

// let storeFive = {
//   location: 'Lima',
//   minCustomer: 2,
//   maxCustomer: 16,
//   aveCookieSale: 4.6,
//   customerPerHour: function(){
//     return randomCustPerHour(this.maxCustomer, this.minCustomer);
//   },
//   cookiesPerHour: function(){
//     return randomCustPerHour(this.aveCookieSale),
//     console.log('do this still');
//   }
// };
// storeFive.customerPerHour();
// console.log(storeFive.customerPerHour());

// // //let petOneImg = document.createElement('img');
// // console.log(petOneImg);
// // petOneImg.setAttribute('src', 'images/' + petOne.imageName + '.jpeg');
// // petOneImg.setAttribute('alt', 'Cute kitty huh? Adopt kitty Now!');
// // article.appendChild(petOneImg);











































// function randomCustPerHour(minCust, maxCust){
//   return Math.ceil(Math.random() * (maxCust - minCust) + minCust);
// }
