var itemsInCart;
var productsArray = [];

//make sure it works
window.onload = function() {
	console.log("all resources loaded");
	sessionStorage.setItem('itemsInCart', 0); // reset the session storage to 0 if reload the page
	sessionStorage.setItem('products', []);
	var totalItems = document.getElementById("totalItems");
	itemsInCart = sessionStorage.getItem('itemsInCart');
	totalItems.innerText = itemsInCart;
}

//listen to the whole window on load
window.addEventListener("load", function(){
	var item1 = document.getElementById("item1"); //first store item
	var item2 = document.getElementById("item2"); //second store item
	var item3 = document.getElementById("item3"); //third store item

	item1.onmouseover = addBorder;
	item1.onmouseout = removeBorder;
	item1.onclick = alertDescription;

	item2.onmouseover = addBorder;
	item2.onmouseout = removeBorder;
	item2.onclick = alertDescription;

	item3.onmouseover = addBorder;
	item3.onmouseout = removeBorder;
	item3.onclick = alertDescription;
});

//alert the description
function alertDescription(event){
	if(this.id === "item1"){
		alert("The Grey Puff friend will always be by your side.  They love ice" +
			"cream, and sharing with others");
	}
	if(this.id === "item2"){
		alert("The Cute bear loves to cuddle, and has a nice red bow.");
	}
	if(this.id === "item3"){
		alert("The Yellow duck is quiet, and unlike his real duck friends, he doesn't like to go swimming");
	}
}

//add a border around the store item
function addBorder(event){
	this.style['border'] = "5px solid red";
	this.style['margin'] = "-5px, 0px";
}

//remove a border around a store item
function removeBorder(event){
	this.style['border'] = "";
}

//purchase an item
function buyStuff(){
	event.stopPropagation(); //stop the event bubbling out to the rest of the div
	var itemPurchased = confirm("Are you sure you would like to purchase the " + event.target.previousElementSibling.previousElementSibling.innerText + "?");
	var itemName = event.target.previousElementSibling.previousElementSibling.innerText;
	var itemPrice = event.target.previousElementSibling.innerHTML;
	var itemImage = event.target.previousElementSibling.previousElementSibling.previousElementSibling.attributes["0"].nodeValue;
	const quantity = 1;

	console.log(event);

	//If the user decides to purchase the item. Create the product, and save it to the cart session.
	if(itemPurchased){
		itemsInCart++;
		totalItems.innerText = itemsInCart;
		var product = new Product(itemName, itemPrice, 1, itemImage);
		productsArray.push(product);
		sessionStorage.setItem('products', JSON.stringify(productsArray));
		sessionStorage.setItem('itemsInCart', itemsInCart);
	}
}

//create a product
var name;
var price;
var quantity;
var imageLink;

function Product (name, price, quantity, imageLink){
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.imageLink = imageLink;
}
