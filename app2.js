// create 5 empty objects with names indicating some soret of place

let norwich   = {};
let cambridge = {};
let london    = {};
let cardif    = {};
let glasgow   = {};

console.log(typeof(norwich));

console.log(cambridge);

//select any one object 
//add 3 properties to that object
//minCustomersVisited
//maxCustomersVisited
//avgCookiesSoldPercustomer

//add values to the properties

norwich.minPerCustomer              = 2;
norwich.maxPerCustomer              = 25;
norwich.avgCookiesSoldPerCustomer   = 12;

console.log(norwich);


cambridge.minPerCustomer            = 23;
cambridge.maxPerCustomer            = 67;
cambridge.avgCookiesSoldPerCustomer = 42;

console.log(cambridge);

london.minPerCustomer               = 12;
london.maxPerCustomer               = 84;
london.avgCookiesSoldPerCustomer    = 43;

console.log(london);

cardif.minPerCustomer               = 35;
cardif.maxPerCustomer               = 120;
cardif.avgCookiesSoldPerCustomer    = 78;

console.log(cardif);

glasgow.minPerCustomer              = 27;
glasgow.maxPerCustomer              = 97;
glasgow.avgCookiesSoldPerCustomer   = 65;

console.log(glasgow);

// Create an array named as locations
//add the objects to this array

const locations = [norwich, cambridge, london, cardif, glasgow];
  
console.log(locations);

// create a method for any 1 of your location object
// method name is random number

norwich.randomNumber = function () {
    const low   = 10;
    const high  = 100;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}

console.log(norwich.randomNumber());


cambridge.randomNumber = function () {
    const low   = 10;
    const high  = 100;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}

console.log(cambridge.randomNumber());


london.randomNumber = function () {
    const low   = 10;
    const high  = 100;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}

console.log(london.randomNumber());

cardif.randomNumber = function () {
    const low   = 10;
    const high  = 100;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}

console.log(cardif.randomNumber());

glasgow.randomNumber = function () {
    const low   = 10;
    const high  = 100;
    const delta = high - low;
    return Math.floor(Math.random() * delta) + low;
}

console.log(glasgow.randomNumber());

// generate random numbers for customers visited

norwich.customersVisited = function() {
    return this.randomNumber();

}

console.log(norwich.customersVisited());


cambridge.customersVisited = function() {
    return this.randomNumber();
}

console.log(cambridge.customersVisited());


london.customersVisited = function() {
    return this.randomNumber();
}

console.log(london.customersVisited());


cardif.customersVisited = function() {
    return this.randomNumber();
}

console.log(cardif.customersVisited());


glasgow.customersVisited = function() {
    return this.randomNumber();
}

console.log(glasgow.customersVisited());

// create a for loop to console log all the locations

for (let i = 0; i < locations.length; i++) {

    for (let j = 8; j<=16; j++) {
        console.log("time at " + j);
        const customers = locations[i].customersVisited();
        console.log("Customers visited: " + customers);
        console.log("Total cookies sold: " + locations[i].avgCookiesSoldPerCustomer * customers);
    }

    console.log("location " + i);
   
}

for (let jobs = 0; jobs<=12; jobs++) {
    const low = 1
    console.log(jobs)
}