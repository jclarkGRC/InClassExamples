//asd;lfjkas;ldfjka;slkdfjl; put my comment

accessingIndividualElements();
accessingMultipleElements();
traversingTheDom();
addingElementsToTheDom();

function accessingIndividualElements() {

    var header = document.getElementById("page_header");

    //alter the text content
    header.textContent = "Welcome to my page!";

    //insert child elements directly
    header.innerHTML = 'Welcome to <span class="title">Joshua\'s</span> page';

    //select elements with the query selector
    var figures = document.querySelector("#figures");
    figures.textContent = "My " + figures.textContent;
}

//selecting multiple elements ******

function accessingMultipleElements() {
    //selecting multiple elements - getElementsByClassName();

    //retrieve a collection of HTML results
    var every = document.getElementsByClassName("every");
    var other = document.getElementsByClassName("other");

    //change the background color of the list items with the class of other
    for(var i = 0; i < other.length; i++){
        other[i].style.backgroundColor = "rgb(220,220,220)";
    }

    //select multiple elements with tags - getElementsByTagName();
    var paragraphs = document.getElementsByTagName("p");

    for(var j = 0; j < paragraphs.length; j++){
        paragraphs[j].style.margin = "20px";
    }

    //selecting multiple elements as a node-list -- querySelectorAll()
    var quotes = document.querySelectorAll("p span.quote");

    //node lists behave like arrays
    for(var k = 0; k < quotes.length; k++) {
        quotes[k].style.display = "block";
        quotes[k].style.fontStyle = "italic";
        quotes[k].style.margin = "10px 30px";
        quotes[k].textContent = '"' + quotes[k].textContent + '"';
    }
}

//traversing the DOM

function traversingTheDom() {
    //parent nodes - select the parent paragraphs of the quotes
    var quotes = document.querySelectorAll(".quote");

    for(var i = 0; i < quotes.length; i++){
        var parent = quotes[i].parentNode;
        parent.style.backgroundColor = "rgb(220,220,220)";
        parent.style.borderRadius = "5px";
        parent.style.padding = "8px";
    }


    //child, sibling nodes ........

    //first Child, lastChild
    var element = document.body.firstChild;

    while(element != undefined){
        //determine the different node types with Node.*
        //TEXT_NODE, ELEMENT_NODE, DOCUMENT_NODE, COMMENT_NODE ....

        if(element.nodeType !== Node.TEXT_NODE && element.nodeType != Node.COMMENT_NODE){
            element.style.fontFamily = "verdana";


        //move element to the next node
        element = element.nextSibling;
    }

    //children
    var table = document.getElementById("contact_table");


    //firstElementChild selects element nodes, but not text nodes
    var headerRow = table.firstElementChild.firstElementChild; //table --> thead --> tr
    var headers = headerRow.children;

    for(var i = 0; i < headers.length; i++) {
        headers[i].style.textDecoration = "underline";
    }
}


//adding new elements to the DOM.......
function addingElementsToTheDom(){
    var listItems = document.getElementsByTagName("li");

    for(var i = 0; i < listItems.length; i++){
        var link = document.createElement("a");
        var space = document.createTextNode(" ");

        link.href = "https://www.google.com";
        link.textContent = "Google";

        listItems[i].appendChild(space);
        listItems[i].appendChild(link);
    }
}


function addRecord(){
    var table = document.getElementById("contact_table");
    var body = table.lastElementChild;

    var row = document.createElement("tr");
    row.appendChild(getTableCell("Please enter a name"));
    row.appendChild(getTableCell("Please enter a email"));
    row.appendChild(getTableCell("Please enter a phone #"));

    body.appendChild(row);
}

function getTableCell(promptMessage){
    var contents = prompt(promptMessage);
    var cell = document.createElement("td");

    cell.innerHTML = contents;

    return cell;
}





















