"use strict"
var hours=['6am ' , '7am ' , '8am ' , '9am ' , '10am ' , '11am ' , '12pm ' , '1pm ' , '2pm ' , '3pm ' , '4pm ' , '5pm ' , '6pm ' , '7pm '];
const seattle = {
  location: 'Seattle', 
  maxCust: 65,
  minCust: 23,
  avgSale: 6.3

  getCust: function(){
    console.log(this.location);
    this.Cust = randomCust(23,65) + ' Per Hour ';
    console.log(this.Cust);
  }
};
seattle.getCust();

const tokyo = {
  location: 'Tokyo',
  maxCust: 24,
  minCust: 3,
  avgSale: 1.2
  
  getCust2: function(){
    console.log(thislocation);
    this.Cust= randomCust(3,24) + ' Per Hour';
    console.log(this.Cust);
  }
};
tokyo.getCust2();

const dubai = {
  location: 'Dubai',
  maxCust: 38,
  minCust: 11,
  avgSale: 3.7,

  getCust3: function(){
    console.log(this.location);
    this.Cust = randomCust(11,38) + ' Per Hour';
    console.log(this.Cust);
  }
};
dubai.getCust();

const paris = {
  location: 'Paris',
  maxCust: 38,
  minCust: 20,
  avgSale: 2.3

  getCust4: function(){
    console.log(this.location);
    this.Cust = random(20,38) + ' Per Hour';
    console.log(this.Cust);
  }
};
paris.getCust4();

const lima = {
  locaton = 'Lima',
  maxCust= 16,
  minCust= 2,
  avgSale: 4.6

  getCust5: function(){
    console.log(this.location);
    this.Cust =random(2,16) + ' Per Hour';
    console.log(this.Cust);
  }
};
lima.getCust5();