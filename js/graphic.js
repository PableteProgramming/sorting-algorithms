var numbers= [];
var numbersNum=150;

window.onresize= Draw;
window.onload= Generate;

function Generate(){
	numbers= [];
	while(numbers.length < numbersNum){
		let value=Math.floor(Math.random()* (numbersNum+1));
		if (numbers.indexOf(value) == -1 && value != 0) {
            numbers.push(value);
        }
	}
	Draw();
}

function Draw(){
	// empty the container
	document.getElementById("Graphic-container").innerHTML="";

	//container size
	let contSize= window.innerWidth * 0.8;

	let barWidth= contSize / numbersNum;

	console.log(barWidth);
	
	for(let i=0; i< numbers.length; i++){
		let line= '<div class="Barline" style="height: '+numbers[i]/2.4+'vh; width: '+barWidth+'px;"></div>';
			document.getElementById("Graphic-container").innerHTML += line;
	}
}