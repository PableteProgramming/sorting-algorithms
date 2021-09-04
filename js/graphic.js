var numbers= [];
var numbersDesc= [];
var numbersNum=150;
var maxnumValue=200;
var sortingalg="Insertion";

window.onresize= Draw;
window.onload= Generate;

function occurrences(arr,string){
	let r=0;
	for(let i=0; i<arr.length; i++){
		if(arr[i]==string){
			r+=1;
		}
	}
	return r;
}

function Generate(){
	numbersDesc= [];
	numbers= [];
	while(numbers.length < numbersNum){
		let value=Math.floor(Math.random()* (maxnumValue+1));
		if (value != 0) {
            numbers.push(value);
        }
        let occ= occurrences(numbers,value);
        numbersDesc.push(occ);
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
		let line= '<div id="'+numbers[i]+':'+numbersDesc[i]+'" class="Barline" style="height: '+numbers[i]/3+'vh; width: '+barWidth+'px;"></div>';
		document.getElementById("Graphic-container").innerHTML += line;
	}
}

function ChangeSortAlgorithm(name){
	sortingalg= name;
}

function Sort(){
	if(sortingalg=="Insertion"){
		InsertionSorting();
	}
	else if(sortingalg=="Selection"){
		SelectionSorting();
	}
	else if(sortingalg=="Bubble"){
		BubbleSorting();
	}
}

async function InsertionSorting(){
    alert("Insertion function");
}

async function SelectionSorting(){
    alert("Selection function");
}

async function BubbleSorting(){
    alert("Bubble function");
}