var restaurants = ['Banzo',
'Canteen', 'Sol\'s', 'Colectivo', 'Graze', 'State Street Food Carts', 'Himal Chuli', 'Ramen', 'Sushi next to ramen', 'Michaelangelos', 'Barriques', 'Banzo', 'TeddyWedgers', 'Tavernakaya', 'Ancora']

function newRestaurant() {
	var randomNumber = Math.floor(Math.random()* (restaurants.length));
	document.getElementById('restaurantDisplay').innerHTML = restaurants [randomNumber];
}

var asian = ['Sol\'s', 'Ramen', 'Sushi next to ramen', 'Tavernakaya', 'Red']
var sandwiches = ['Colectivo', 'Ancora', 'Barriques', 'Michaelangelos', 'Banzo']

function setCuisine(){
	var choice = select.value;
	if (choice === 'Asian'){var randomNumber = Math.floor(Math.random()*(asian.length));
	document.getElementById ('cuisineDisplay').innerHTML = asian [randomNumber];
} else if (choice === 'Sandwiches') {
	var randomnumber = Math.floor(Math.random()*(sandwiches.length)); document.getElementById('cuisineDisplay').innerHTML = restaurants [randomNumber];
}

var banzo = {
	cuisine: [sandwiches, foodcarts],
	fall: yes,
	winter: no,
	spring: yes,
	summer: yes

}

var canteen = {
	cuisine: [tacos],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var Sol\s = {
	cuisine: [asian],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var Colectivo = {
	cuisine: [sandwiches, coffee],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var Graze = {
	cuisine: [sandwiches, asian],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var statestreetfoodcarts = {
	cuisine: [foodcarts, asian, sandwiches],
	fall: yes,
	winter: no,
	spring: yes,
	summer: yes
}

var himalchuli = {
	cuisine: [],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var Ramen = {
	cuisine: [asian],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: no
}

var sushinexttoramen = {
	cuisine: [asian, sushi],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var michaelangelos = {
	cuisine: [sandwiches, coffee],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var barriques = {
	cuisine: [sandwiches, salad, coffee],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var teddywedgers = {
	cuisine: [sandwiches, random],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var tavernakaya = {
	cuisine: [asian],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var red = {
	cuisine: [asian, sushi],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}

var ancora = {
	cuisine: [sandwiches, coffee],
	fall: yes,
	winter: yes,
	spring: yes,
	summer: yes
}
