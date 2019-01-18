var restaurants = ['Banzo',
'Canteen', 'Sol\'s', 'Colectivo', 'Graze', 'State Street Food Carts', 'Himal Chuli', 'Ramen', 'Sushi next to ramen', 'Michaelangelos', 'Barriques', 'Banzo', 'TeddyWedgers', 'Tavernakaya', 'Ancora']

function newRestaurant() {
	var randomNumber = Math.floor(Math.random()* (restaurants.length));
	document.getElementById('restaurantDisplay').innerHTML = restaurants [randomNumber];
}
