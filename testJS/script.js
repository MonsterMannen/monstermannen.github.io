function myFunction() {
   	alert("I am an alert box!");
}


var index = 0;
showImage(index);

function next(){
	showImage(++index);
}

function prev(){
	showImage(--index);
}

function showImage(n){
	var x = document.getElementsByClass("images");
	if(n > x.length){
		index = 0;
	}
	if(n < 0){
		index = x.length;
	}
	for(i = 0, i < x.length; i++){
		x[i].style.display = "none";
	}
	x[index].style.display = "block";
}