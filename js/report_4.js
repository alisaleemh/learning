var doclickCount = false ;//false means counter is off
						  //true means counter is on
var clickCounter ;
var counter= 0;

//when toogle counter button is pressed,if doclickCount is false(off) change to true(on)
//when toogle counter button is pressed,if doclickCount is true(on) change to false(off)
function toggleParagraphCounter(){
	console.log("this is printed");

	if (doclickCount==false){
    console.log("this is printed");
	doclickCount= true;
	console.log(doclickCount);
	document.getElementById("para1").onclick = Aishaa;
	}
	else{
	doclickCount= false;
	document.getElementById("para1").onclick = clickMe;
	console.log(doclickCount);
	}
}

function Aishaa(){
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
