console.log("classes and constructors");


// create 5 empty objects with names indicating some soret of place
function locationsClass(name, min, max, avg) {
    this.name                      = name;
    this.minCustomersVisited       = min;
    this.maxCustomersVisited       = max;
    this.avgCookiesSoldPerCustomer = avg;
    this.randomNumber = function() {
        const low   =  10;
        const high  = 100;
        const delta = high - low;
        return Math.floor(Math.random() * delta) + low;
    }

    this.customersVisited = function() {
             return this.randomNumber();
         }

    this.avgCookiesSold = function() {
        return this.customersVisited * this.avgCookiesSoldPerCustomer;
    }     

   
}


let norwich   = new locationsClass ("norwich ",  12, 45, 4);
let cambridge = new locationsClass ("cambridge ", 8, 60, 2);
let london    = new locationsClass ("london ",   23, 89, 3);
let cardif    = new locationsClass ("cardif ",   17, 45, 5);
let glasgow   = new locationsClass ("glasgow ",  26, 87, 3);

const locations = [norwich, cambridge, london, cardif, glasgow];

for (let i = 0; i <locations.length; i++) {
    //console.log(locations[i].name);
    for (let j = 10; j < 20; j++){
        console.log("The number of customers visiting " + locations[i].name + "at ")
        console.log(j + ":00");
        console.log("was");
        console.log(locations[i].customersVisited());
    }
}



// for (let i = 0; i < locations.length; i++) {

//     for (let j = 8; j<=16; j++) {
//         console.log("time at " + j);
//         const customers = locations[i].customersVisited();
//         console.log("Customers visited: " + customers);
//         console.log("Total cookies sold: " + locations[i].avgCookiesSoldPerCustomer * customers);
//     }

//     console.log("location " + i);
   
// }

// for (let jobs = 0; jobs<=12; jobs++) {
//     const low = 1
//     console.log(jobs)
// }