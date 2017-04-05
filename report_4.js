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
		if(counter%2==0){
		clickMe();
		document.getElementById("para1").innerHTML = "This has evenbeen clicked " + counter + " times with the counting enabled";
		}
		else{
		clickMe()
		document.getElementById("para1").innerHTML = "This has oddbeen clicked " + counter + " times with the counting enabled";
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
	var span = document.createElement('span');
	var span_text = "Click Me";

	var inserted = "#" + newclickmeCounter ;
	listItem.appendChild(document.createTextNode(inserted));
	// orderedList.appendChild(listItem);
	orderedList.insertBefore(listItem, orderedList.children[2]);

	span.appendChild(document.createTextNode(span_text));
	listItem.appendChild(span);

	newclickmeCounter++;

}
