var doclickCount = false ;//false means counter is off
//true means counter is on
var clickCounter ;
var counter= 0;
var newclickmeCounter = 0;
//when toogle counter button is pressed,if doclickCount is false(off) change to true(on)
//when toogle counter button is pressed,if doclickCount is true(on) change to false(off)
function toggleParagraphCounter(){
	console.log("this is printed");

	if (doclickCount==false){
		console.log("this is printed");
		doclickCount= true;
		console.log(doclickCount);
		// Changing the onclick attribute depending on doclickCount
		document.getElementById("para1").onclick = clickWithCounter;
	}
	else{
		doclickCount= false;
		// Changing the onclick attribute depending on doclickCount
		document.getElementById("para1").onclick = clickMe;
		console.log(doclickCount);
	}
}

function clickWithCounter(){
	console.log(counter);
	counter++ ;

	//if doclickCount is true(on),if/else statment is run depending on even/odd click to pararagraph
	if(doclickCount==true){

		//this is excecuted if paragraph is clicked an even number of times
		if(counter%2==0){
			clickMe();
			// var x = document.createElement("ol");
			// var t = document.createTextNode(" Clicked " + counter + " times with couting enabled");
			// x.appendChild(t);
			// document.body.appendChild(x);
			// document.getElementById("para1").appendChild(x);
			var para = document.createElement('p');
			var para_text =  "Clicked " + counter + " times with couting enabled";
			para.appendChild(document.createTextNode(para_text));
			document.getElementById("para1").appendChild(para);

			//ali bhai, the way i have appended it is not the same as figure 3 of the report spec
		}

		//this is excecuted if paragraph is clicked an odd number of times
		else{
			clickMe()
			var para = document.createElement('p');
			var para_text =  "Clicked " + counter + " times with couting enabled";
			para.appendChild(document.createTextNode(para_text));
			document.getElementById("para1").appendChild(para);
			//ali bhai,not the same as figure 3. i think its not appending it to the paragraph but as a list
		}
	}

	//if doclickCount is false(off),then clickme is called.
	else if(doclickCount==false){
		clickMe();
	}

}

function addNewClickMeToList()
{
	var orderedList = document.getElementById("list1");
	var listItem = document.createElement('li');
	var listItem2 = document.createElement('li');
	var span = document.createElement('span');
	var span_text = "Click Me";

	var inserted = "#" + newclickmeCounter + " new " ;
	listItem.appendChild(document.createTextNode(inserted));
	listItem.id = newclickmeCounter ;
	orderedList.insertBefore(listItem, orderedList.children[2]);

	span.onmouseover= function() {
		mouseOver(span);
	};

	span.onclick = function () {
		newLIclick(span);
	};
	span.appendChild(document.createTextNode(span_text));

	//span.onmouseout=mouseOff(this);
	//span.onclick=iWasClicked(this);
	listItem.appendChild(span);

	orderedList.insertBefore(listItem2, orderedList.children[3]);
	newclickmeCounter++;

}



function newLIclick(whoWasClicked) {
	// list1 is a pointer to the bulleted list.

	var list1 = document.getElementById("list1");

	// child is the index to the list.  It is set to point to the
	// first item in the list.

	var child = 0;

	// The following loop demonstrates one way in which you can find and point
	// to a particular element in a specific DOM.

	// Loop over all the items in the list.  Stop looping when the
	// index goes after the last list item or when the list item indexed
	// by child is the the list item that was clicked.

	while ( child < list1.childNodes.length
		&& whoWasClicked !== list1.childNodes[child]) {
			child += 1;
		}

		// Loop must exit with child pointing to a list element that was clicked,
		// as this routine is only called if such an element is clicked.

		// The following creates a set of nodes that contain the message that
		// is displayed when a list item is clicked.

		// Cannot append to list1, as that puts the HTML after the last <li>
		// and before </ul>, which would construct incorrect HTML.
		// Append the new HTML to the body of the document.

		var ol1 = document.createElement("ol");
		whoWasClicked.appendChild(ol1);

		var text = document.createTextNode("  You clicked on ");
		whoWasClicked.appendChild(text);


		text = document.createTextNode(whoWasClicked.childNodes[0].data);


		var span = document.createElement("span");
		span.style = "font-size: 1.1em; color: forestGreen";
		span.appendChild(text);
		whoWasClicked.appendChild(span);

		//var ol2 = document.createElement("ol2");
		//body.appendChild(ol2);


	}
