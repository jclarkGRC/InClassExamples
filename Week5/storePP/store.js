//make sure it works
window.onload = function() {
	console.log("all resources loaded");
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
	this.style['padding'] = "5px";
	this.style['border-radius'] = "5px";
}

//remove a border around a store item
function removeBorder(event){
	this.style['border'] = "";
	this.style['padding'] = "";
}
