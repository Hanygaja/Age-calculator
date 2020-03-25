function calculate() {
	var number = document.getElementById('age').value;

	if (number === "" || number === null) {
		window.alert('Please enter a valid age!');
		return;
	}
	
	var date = new Date();
	var year = date.getFullYear();

	var birthYear = year - number;

	document.getElementById('getYear').innerHTML = "Your Birthday is "+birthYear;

}

document.getElementById('submit').addEventListener('click', function() {
	return calculate();
})

document.getElementById('age').addEventListener('keypress', function(event){
	if(event.which === 13 || event.keyCode ===13) {
		return calculate();
	}
})



