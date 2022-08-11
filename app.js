

//create an object

let norwich = {};
let tokyo = {};
let dubai = {};
let paris = {};
let london = {};

const locations = [norwich, tokyo, dubai, paris, london]

console.log(locations);

// cookies per location

norwich.minPerCustomer = 20;
norwich.maxPerCustomer = 40;
norwich.avgCookiesPerCustomer = (norwich.minPerCustomer + norwich.maxPerCustomer)/2;

//console.log(norwich);


tokyo.minPerCustomer = 3;
tokyo.maxPerCustomer = 24;
tokyo.avgCookiesPerCustomer = (tokyo.minPerCustomer + tokyo.maxPerCustomer)/2;

//console.log(tokyo);


dubai.minPerCustomer = 11;
dubai.maxPerCustomer = 38;
dubai.avgCookiesPerCustomer = (dubai.minPerCustomer + dubai.maxPerCustomer)/2;

//console.log(dubai);


paris.minPerCustomer = 20;
paris.maxPerCustomer = 38;
paris.avgCookiesPerCustomer = (paris.minPerCustomer + paris.maxPerCustomer)/2;

//console.log(paris);


london.minPerCustomer = 23;
london.maxPerCustomer = 65;
london.avgCookiesPerCustomer = (london.minPerCustomer + london.maxPerCustomer)/2;

//console.log(london);


console.log(locations)

norwich.randomNumber = function () {
    
//return Math.floor(Math.random() * 10);
    const upper = this.maxPerCustomer;
    const lower = this.minPerCustomer;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;
}

console.log(norwich.randomNumber());





tokyo.randomNumber = function () {
    const upper = this.maxPerCustomer;
    const lower = this.minPerCustomer;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;

}

console.log(tokyo.randomNumber());

dubai.randomNumber = function () {
    const upper = 100;
    const lower = 10;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;

}

console.log(dubai.randomNumber());

paris.randomNumber = function () {
    const upper = 100;
    const lower = 10;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;

}

console.log(paris.randomNumber());

london.randomNumber = function () {
    const upper = 100;
    const lower = 10;

    const delta = upper - lower;
    return Math.floor(Math.random() * delta) + lower;

}

console.log(london.randomNumber());


//cookies sold

norwich.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgCookies = this.avgCookiesPerCustomer;

    return customers * avgCookies;

}



console.log(norwich.cookiesSold());


tokyo.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgCookies = this.avgCookiesPerCustomer;

    return customers * avgCookies;

}



console.log(tokyo.cookiesSold());


dubai.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgCookies = this.avgCookiesPerCustomer;

    return customers * avgCookies;

}



console.log(dubai.cookiesSold());


paris.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgCookies = this.avgCookiesPerCustomer;

    return customers * avgCookies;

}



console.log(paris.cookiesSold());

london.cookiesSold = function(){
    const customers = this.randomNumber();
    const avgCookies = this.avgCookiesPerCustomer;

    return customers * avgCookies;

}



console.log(london.cookiesSold());


