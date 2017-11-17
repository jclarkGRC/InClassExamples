$(document).ready(function(){
	//is it testing?
	//alert("Jquery is working");
	
	jquerySelectors();
	jqueryEvents();
	jqueryFunctions();
	jqueryAnimations();
	jqueryAddingElements();
	jqueryRemovingElements();
	// jqueryTraversingTheDom();
});

function jquerySelectors (){
	var paragraphs = $("p");
	paragraphs.css("background-color", "lightgrey");
	paragraphs.css("padding", "6px");

	//method chaining
	$("span.quote").css("display", "block")
					.css("margin", "10px 30px")
					.css("font-style", "italic");
}

function jqueryEvents(){
	//events can be assigned through methods like click(), mouseOver(), etc
	//events are assigned to all elements that match that selection
	$("span.quote").click(function(){
		//retrieve text from quotes
		var currentText = $(this).text();
		currentText = '"' + currentText + '"';

		//assigning text
		$(this).text(currentText);
	});

	//the on() function may be used instead
	$("p").on("click", function(){
		//setting attributes
		$(this).attr("tag", "I was clicked");
	});

	//slide elements down
	$("span.quote").hover(function() {
		$(this).css("color", "rgb(100, 100, 100)");
	}, function() {
		$(this).css("color", "rgb(200, 200, 200)");
	});
}

function jqueryFunctions() {
	//hide, show, toggle
	$("button#toggle-button").click(function(){
		var buttonText = $(this).text();
		var table = $('table');

		if(buttonText == "Show"){
			$(this).text("Hide");
			//table.show();
		}
		else{
			$(this).text("Show");
			//table.hide();
		}

		//alternative
		table.toggle();
	})
}

function jqueryAnimations() {
	//fade, slide animations

	//fade an element in and out
	$("li.every").click(function(){
		$(this).fadeOut(1500).fadeIn(1500);
	});

	//slide element down if it is hidden first
	$("li.other").slideDown(1000).fadeTo("slow", 0.5);
}

function jqueryAddingElements(){
	//append(), prepend(), before(), after()

	//html can be included in your content
	$("body").append("<p> Hello World, I am added to the bottom of the page</p>");

	//you can add after an alement
	$("h1").after("<hr>");
}

function jqueryRemovingElements() {
	//removing all the children... say bye bye kids
	$("button#remove-list").click(function(){
		$("ol.list").empty();
	})

	//remove multiple elements with a single selector
	$("span.quote").remove();

	$("span").remove(".quote");
}





































