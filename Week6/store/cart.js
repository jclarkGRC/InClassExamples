var cart = document.getElementById("cart");
var numberOfCartItems = sessionStorage.getItem('itemsInCart');
var products = JSON.parse(sessionStorage.getItem('products'));

numberOfCartItems = parseInt(numberOfCartItems);

displayNumberOfItemsPurchased(numberOfCartItems);
createProductList(products);

function createProductList(arrayOfProducts) {
	//iterate over the list of products
	for(var i = 0; i < arrayOfProducts.length; i++){
		//create the product elements
		let product = createProduct(arrayOfProducts[i]);
		//add that html to the div
		cart.appendChild(product);
	}
}

function createProduct(product){
	//create the product div and the children elements or siblings
	let productDiv = document.createElement("div");
	let imageElement = createImage(product.imageLink);
	let nameParagraph = createNameParagraph(product.name);
	let priceParagraph = createPriceParagraph(product.price);

	//add all elements to the product div
	productDiv.appendChild(imageElement);
	productDiv.appendChild(nameParagraph);
	productDiv.appendChild(priceParagraph);
	return productDiv;
}

function createPriceParagraph(price){
	let priceParagraph = document.createElement("p");
	let priceText = document.createTextNode(price);
	priceParagraph.appendChild(priceText);
	return priceParagraph;
}

function createNameParagraph(name){
	let nameParagraph = document.createElement("p");
	let nameText = document.createTextNode(name);
	nameParagraph.appendChild(nameText);
	return nameParagraph;
}

function createImage(imageLink){
	let img = document.createElement("img");
	let att = document.createAttribute("src");        // Create a "src" attribute
	att.value = imageLink;            // Set the value of the src attribute
	img.setAttributeNode(att);                      // Add the src attribute to <img>
	return img;
}

function displayNumberOfItemsPurchased (numberOfCartItems){
	if(numberOfCartItems > 0){
		if(numberOfCartItems === 1){
			cart.innerText = "You have purchased " + numberOfCartItems + " item....";
		}
		else{
			cart.innerText = "You have purchased " + numberOfCartItems + " items....";
		}
	}
}
